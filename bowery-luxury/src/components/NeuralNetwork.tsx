import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
}

const Particles: React.FC<ParticlesProps> = ({ count = 5000 }) => {
  const ref = useRef<THREE.Points>(null);
  const particlesRef = useRef<THREE.BufferAttribute>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const radius = Math.random() * 5;

      temp[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      temp[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      temp[i * 3 + 2] = radius * Math.cos(theta);
    }
    return temp;
  }, [count]);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const distance = Math.sqrt(
          Math.pow(particles[i * 3] - particles[j * 3], 2) +
          Math.pow(particles[i * 3 + 1] - particles[j * 3 + 1], 2) +
          Math.pow(particles[i * 3 + 2] - particles[j * 3 + 2], 2)
        );
        if (distance < 1.5) {
          lines.push([
            particles[i * 3], particles[i * 3 + 1], particles[i * 3 + 2],
            particles[j * 3], particles[j * 3 + 1], particles[j * 3 + 2]
          ]);
        }
      }
    }
    return lines;
  }, [particles, count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {connections.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array(line)}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#D4AF37" opacity={0.1} transparent />
        </line>
      ))}
    </group>
  );
};

export const NeuralNetwork: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Particles count={1000} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
};