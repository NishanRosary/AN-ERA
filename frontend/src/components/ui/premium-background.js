import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Trail, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3ECF7A"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function FloatingOrb({ position, color, speed, size }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
        mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
        mesh.current.rotation.x = time * 0.2;
        mesh.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={mesh}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Sphere args={[size, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            speed={hovered ? 5 : 2}
            distort={0.4}
            radius={1}
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function InteractiveController() {
  const { mouse, camera } = useThree();
  const lightRef = useRef();

  useFrame((state) => {
    if (lightRef.current && state.camera && state.viewport) {
      // Smoothly follow mouse
      const targetX = (state.mouse.x * state.viewport.width) / 2;
      const targetY = (state.mouse.y * state.viewport.height) / 2;
      lightRef.current.position.set(targetX, targetY, 2);
    }
  });

  return <pointLight ref={lightRef} intensity={5} color="#3ECF7A" distance={10} />;
}

export function PremiumBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-background transition-colors duration-500">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        
        <Particles count={3000} />
        
        <FloatingOrb position={[-2, 1, -1]} color="#2D6A4F" speed={1.2} size={0.6} />
        <FloatingOrb position={[3, -2, -2]} color="#3ECF7A" speed={0.8} size={0.8} />
        <FloatingOrb position={[0, 0, -3]} color="#52E09C" speed={1.5} size={0.4} />

        <InteractiveController />
      </Canvas>
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_80%)] opacity-40 pointer-events-none" />
    </div>
  );
}
