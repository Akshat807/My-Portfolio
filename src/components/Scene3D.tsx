import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Torus, Icosahedron } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#00e5cc"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) => {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Torus args={[1, 0.3, 16, 100]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  );
};

const FloatingIcosahedron = ({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) => {
  return (
    <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron args={[1]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={1}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00e5cc" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#9747ff" />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#e847a5" />
        
        <AnimatedSphere />
        <FloatingTorus position={[-4, 2, -2]} color="#9747ff" scale={0.5} />
        <FloatingTorus position={[4, -2, -3]} color="#e847a5" scale={0.4} />
        <FloatingIcosahedron position={[3, 3, -4]} color="#00e5cc" scale={0.6} />
        <FloatingIcosahedron position={[-3, -3, -2]} color="#9747ff" scale={0.4} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
