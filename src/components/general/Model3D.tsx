import { Canvas } from "@react-three/fiber";
import { useGLTF, Html, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Model = ({ modelUrl }: { modelUrl: string }) => {
  const { scene } = useGLTF(modelUrl);
  return (
    <primitive
      object={scene}
      position={[0, -0.2, 0]}
      scale={[1.8, 1.8, 1.8]}
      rotation={[0.7, 20.7, 8.9]}
      dispose={null}
    />
  );
};

const Model3D = ({ modelUrl }: { modelUrl: string }) => (
  <Canvas
    className="hidden sm:block"
    style={{ height: "350px" }}
    camera={{ position: [0, 1, 3], fov: 50 }}
  >
    <ambientLight intensity={0.5} />
    <Suspense fallback={<Html>Loading...</Html>}>
      <Model modelUrl={modelUrl} />
    </Suspense>
    <OrbitControls enableZoom={false} enableRotate enablePan={false} />
  </Canvas>
);

export default Model3D;
