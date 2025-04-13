
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import LaptopModel from './LaptopModel';

interface Scene3DProps {
  className?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ className }) => {
  return (
    <div className={`h-full w-full ${className}`}>
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <pointLight position={[0, 3, 5]} intensity={0.5} color="#fdee30" />
          
          <LaptopModel position={[0, 0, 0]} scale={1.5} autoRotate={true} />
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
