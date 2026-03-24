import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../../hooks/use-theme";

function Particles({ count = 5000 }) {
  const { theme } = useTheme();
  const particleColor = theme === 'dark' ? "#3ECF7A" : "#000000";

  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
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
    
    // Smooth camera movement based on mouse
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={particleColor}
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === 'dark' ? 0.4 : 0.25}
      />
    </Points>
  );
}

function InteractiveLight() {
  const { theme } = useTheme();
  const lightColor = theme === 'dark' ? "#3ECF7A" : "#000000";
  const lightRef = useRef();

  useFrame((state) => {
    if (lightRef.current && state.viewport) {
      const targetX = (state.mouse.x * state.viewport.width) / 2;
      const targetY = (state.mouse.y * state.viewport.height) / 2;
      lightRef.current.position.set(targetX, targetY, 5);
    }
  });

  return <pointLight ref={lightRef} intensity={theme === 'dark' ? 10 : 25} color={lightColor} distance={15} />;
}

export function PremiumBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-background transition-colors duration-500 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={6000} />
        <InteractiveLight />
      </Canvas>
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)] opacity-50 pointer-events-none" />
    </div>
  );
}
