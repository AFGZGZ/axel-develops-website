import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

class InfinityCurve extends THREE.Curve<THREE.Vector3> {
  constructor() {
    super();
  }

  override getPoint(t: number) {
    const scale = 2;
    const angle = t * Math.PI * 2;

    return new THREE.Vector3(
      Math.sin(angle) * scale,
      Math.sin(angle) * Math.cos(angle) * scale * 0.6,
      Math.cos(angle) * scale * 0.4,
    );
  }
}

function Tube() {
  const meshRef = useRef<THREE.Mesh | null>(null);

  const curve = useMemo(() => new InfinityCurve(), []);

  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 120, 0.08, 12, true),
    // new THREE.TubeGeometry(curve, 200, 0.08, 16, true),
    [curve],
  );

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime;

    const isMobile = state.size.width < 768;
    const scale = isMobile ? 1.2 : 1.8;

    meshRef.current.scale.set(0.6, scale, scale);
    meshRef.current.rotation.y = t * 0.08;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="#aaaaaa" roughness={0.4} metalness={0.2} />
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
