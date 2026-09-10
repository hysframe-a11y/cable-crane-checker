import { AbsoluteFill, Composition } from "remotion";
import { NaganoBoot, FPS, DURATION_IN_FRAMES, WIDTH, HEIGHT } from "./NaganoBoot";
import { Background } from "./Background";

const BackgroundOnly: React.FC = () => (
  <AbsoluteFill>
    <Background />
  </AbsoluteFill>
);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NaganoBoot"
        component={NaganoBoot}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="BackgroundOnly"
        component={BackgroundOnly}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
