import React, { useEffect, useRef } from "react";

interface CompressedIcon {
  data: [];
  className?: string;
  onClick?: () => void;
}

function CompressedIcon({ data, ...props }: CompressedIcon) {
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
      if (x === 32) {
        y += 2;
        x = 0;
      }
    });
  });

  return (
    <canvas
      ref={canvasRef}
      width={32}
      height={32}
      style={{ imageRendering: "pixelated" }}
      {...props}
    />
  );
}

export default CompressedIcon;
