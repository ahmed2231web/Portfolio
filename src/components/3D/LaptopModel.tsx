
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface LaptopModelProps {
  position?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

export default function LaptopModel({
  position = [0, 0, 0],
  scale = 2.5,
  autoRotate = true,
  rotationSpeed = 0.005
}: LaptopModelProps) {
  const meshRef = useRef<THREE.Group | null>(null);
  const [hovered, setHovered] = useState(false);
  const [rotating, setRotating] = useState(autoRotate);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  
  // Setup hover events
  const onPointerOver = () => setHovered(true);
  const onPointerOut = () => setHovered(false);
  
  // Toggle rotation on click
  const onClick = () => setRotating(!rotating);
  
  // Handle mouse move for manual rotation
  const onPointerMove = (e: any) => {
    if (!rotating && hovered) {
      const x = (e.offsetX / e.target.clientWidth) * 2 - 1;
      const y = -(e.offsetY / e.target.clientHeight) * 2 + 1;
      setTargetRotation({ x: y * 0.5, y: x * Math.PI });
    }
  };

  // Setup event listeners
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('pointermove', onPointerMove);
      return () => {
        canvas.removeEventListener('pointermove', onPointerMove);
      };
    }
  }, [rotating, hovered]);

  // Create a simple laptop model with Three.js geometry
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    if (rotating) {
      // Auto-rotation
      meshRef.current.rotation.y += rotationSpeed;
    } else if (hovered) {
      // Smooth transition to target rotation when manually rotating
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x, 
        targetRotation.x, 
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y, 
        targetRotation.y, 
        0.1
      );
    }
    
    // Add subtle floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <group 
      ref={meshRef} 
      position={new THREE.Vector3(...position)} 
      scale={scale}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={onClick}
    >
      {/* Laptop base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Laptop screen */}
      <group position={[0, 0.55, -0.45]} rotation={[Math.PI / 6, 0, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.5, 1, 0.05]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen display */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.4, 0.9]} />
          <meshBasicMaterial color="#fdee30" opacity={0.8} transparent>
            <circuitBoard 
              scale={0.6} 
              position={[0, 0, 0.01]}
            />
          </meshBasicMaterial>
        </mesh>
      </group>
      
      {/* Keyboard */}
      <mesh position={[0, 0.06, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.4, 0.8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Logo on the back of screen */}
      <mesh position={[0, 0.55, -0.48]} rotation={[Math.PI / 6, 0, 0]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial color="#fdee30" emissive="#fdee30" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
