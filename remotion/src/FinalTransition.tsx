import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { HEIGHT, T_END, T_LOGOTYPE_END, WIDTH } from "./theme";

export const FinalTransition: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [T_LOGOTYPE_END + 4, T_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardW = WIDTH * 0.72;
  const cardH = HEIGHT * 0.3;
  const cardX = (WIDTH - cardW) / 2;
  const cardY = HEIGHT * 0.68;

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, opacity }}
    >
      <rect
        x={cardX}
        y={cardY}
        width={cardW}
        height={cardH * 0.22}
        rx={10}
        fill="#eef1f0"
      />
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => (
          <rect
            key={`key-${row}-${col}`}
            x={cardX + col * (cardW / 3) + 10}
            y={cardY + cardH * 0.32 + row * (cardH * 0.22)}
            width={cardW / 3 - 20}
            height={cardH * 0.18}
            rx={8}
            fill="#f4f6f5"
            stroke="#dfe4e2"
            strokeWidth={1}
          />
        ))
      )}
    </svg>
  );
};
