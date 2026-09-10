import "./index.css";
import { NaganoSplashComposition } from "./NaganoSplash";
import { BootAnimationComposition } from "./BootAnimation";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <NaganoSplashComposition />
      <BootAnimationComposition />
    </>
  );
};
