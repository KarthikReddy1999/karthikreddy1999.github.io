import { memo } from "react";

const NoiseBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
});

NoiseBackground.displayName = "NoiseBackground";

export default NoiseBackground;
