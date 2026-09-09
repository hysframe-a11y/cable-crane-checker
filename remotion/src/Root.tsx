import { Composition } from "remotion";
import { NaganoBoot, FPS, DURATION_IN_FRAMES, WIDTH, HEIGHT } from "./NaganoBoot";

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
    </>
  );
};
