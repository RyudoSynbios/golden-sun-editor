import React, { useEffect, useRef } from "react";

interface UncompressedImage {
  data: [];
  width: number;
  height?: number;
  scale?: number;
  className?: string;
  onClick?: () => void;
}

function UncompressedImage({
  data,
  width,
  height = width,
  scale = 1,
  ...props
}: UncompressedImage) {
  const canvasRef: any = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (data.length > 0) {
      let x = 0;
      let y = 0;
      data.forEach((pixel: any) => {
        ctx.fillStyle = pixel;
        ctx.fillRect(x, y, scale, scale);
        x += scale;
        if (x === width * scale) {
          y += scale;
          x = 0;
        }
      });
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={width * scale}
      height={height * scale}
      style={{ imageRendering: "pixelated" }}
      {...props}
    />
  );
}

export default UncompressedImage;
