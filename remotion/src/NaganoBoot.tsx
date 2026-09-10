import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Background } from "./Background";
import { Wireframe } from "./Wireframe";
import { LogoMark } from "./LogoMark";
import { Stripes } from "./Stripes";
import { Logotype } from "./Logotype";
import { FinalTransition } from "./FinalTransition";
import { LOGO_CX, LOGO_CY, T_END, T_LOGOTYPE_END } from "./theme";

export {
  WIDTH,
  HEIGHT,
  FPS,
  DURATION_IN_FRAMES,
} from "./theme";

export const NaganoBoot: React.FC = () => {
  const frame = useCurrentFrame();

  const finalScale = interpolate(frame, [T_LOGOTYPE_END, T_END], [1, 0.86], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const finalTranslateY = interpolate(
    frame,
    [T_LOGOTYPE_END, T_END],
    [0, -220],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#eef5f0" }}>
      <Background />
      <Wireframe />
      <FinalTransition />
      <AbsoluteFill
        style={{
          transform: `translateY(${finalTranslateY}px) scale(${finalScale})`,
          transformOrigin: `${LOGO_CX}px ${LOGO_CY}px`,
        }}
      >
        <LogoMark />
        <Stripes />
        <Logotype />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
