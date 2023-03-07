import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="font-bold text-white-100 mt-4 text-[14px]">
        {progress.toFixed(1)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
