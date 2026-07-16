import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sphere, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function FloatingKnot({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} metalness={0.8} roughness={0.15} wireframe />
      </mesh>
    </Float>
  );
}

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.5;
  });
  return (
    <Float speed={1.4} rotationIntensity={2} floatIntensity={2.5}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.9} roughness={0.2} wireframe />
      </mesh>
    </Float>
  );
}

function GlowSphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.2} floatIntensity={3}>
      <Sphere args={[0.8, 64, 64]} position={position}>
        <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={0.5} distort={0.45} speed={2} roughness={0.2} metalness={0.6} />
      </Sphere>
    </Float>
  );
}

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const x = state.pointer.x * 0.5;
    const y = state.pointer.y * 0.3;
    ref.current.rotation.y += (x - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-y - ref.current.rotation.x) * 0.05;
  });
  return <group ref={ref}>{children}</group>;
}

export function Scene3D() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#0a0714"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#7c4dff" intensity={2} />
        <pointLight position={[-10, -10, -5]} color="#00e5ff" intensity={2} />
        <Suspense fallback={null}>
          <ParallaxGroup>
            <Stars radius={80} depth={40} count={4000} factor={4} saturation={0} fade speed={0.5} />
            <FloatingKnot position={[-4, 1.5, -2]} color="#7c4dff" scale={0.8} />
            <FloatingKnot position={[4.5, -1.8, -3]} color="#00e5ff" scale={0.6} />
            <FloatingCube position={[3.5, 2.2, -1]} color="#c084fc" />
            <FloatingCube position={[-4, -2.5, -2]} color="#22d3ee" />
            <GlowSphere position={[0, 0, -4]} color="#7c4dff" />
            <GlowSphere position={[-6, 2, -6]} color="#ec4899" />
            <Float speed={1.5}>
              <Icosahedron args={[0.7, 0]} position={[5.5, 0, -2]}>
                <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.5} wireframe />
              </Icosahedron>
            </Float>
          </ParallaxGroup>
        </Suspense>
      </Canvas>
    </div>
  );
}
