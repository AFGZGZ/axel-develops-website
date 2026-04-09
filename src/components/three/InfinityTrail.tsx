import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

class InfinityCurve extends THREE.Curve<THREE.Vector3> {
  getPoint(t: number) {
    const scale = 2;
    const angle = t * Math.PI * 2;

    const x = Math.sin(angle) * scale;
    const y = Math.sin(angle) * Math.cos(angle) * scale * 0.6;
    const z = Math.cos(angle) * scale * 0.4;

    return new THREE.Vector3(x, y, z);
  }
}

function Tube() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const curve = useMemo(() => new InfinityCurve(), []);

  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 200, 0.08, 16, true),
    [curve],
  );

  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    const scale = window.innerWidth < 768 ? 0.8 : 1;

    meshRef.current.scale.set(scale, scale, scale);

    meshRef.current.rotation.y = t * 0.05;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        ref={materialRef}
        color="#aaaaaa"
        roughness={0.4}
        metalness={0.2}
      />
    </mesh>
  );
}

export default function InfinityScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Tube />
      </Canvas>
    </div>
  );
}
