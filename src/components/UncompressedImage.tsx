import React, { useEffect, useRef } from "react";

interface UncompressedImage {
  data: [];
  width: number;
  className?: string;
  onClick?: () => void;
}

function UncompressedImage({ data, width, ...props }: UncompressedImage) {
  const canvasRef: any = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = 0;
    let y = 0;
    data.forEach((pixel: any) => {
      ctx.fillStyle = pixel;
      ctx.fillRect(x, y, 2, 2);
      x += 2;
      if (x === width) {
        y += 2;
        x = 0;
      }
    });
  });

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={width}
      style={{ imageRendering: "pixelated" }}
      {...props}
    />
  );
}

export default UncompressedImage;
