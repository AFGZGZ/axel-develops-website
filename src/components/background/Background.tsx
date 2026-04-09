import { Canvas, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useRef } from "react";

const GrainMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: [1, 1],
  },

  // vertex
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
  `,

  // fragment
  `
  uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = vUv;

  // Fix aspect ratio
  uv.x *= uResolution.x / uResolution.y;

  float dist = distance(uv, vec2(0.5));
  float vignette = smoothstep(0.9, 0.2, dist);
  float base = 0.05 + vignette * 0.04;

float fineGrain = random(uv * uResolution * 0.8 + uTime * 0.05);
float midGrain  = random(uv * uResolution * 0.4 + uTime * 0.03);
float coarseGrain = random(uv * uResolution * 0.1);

  float grain =
    (fineGrain * 0.6 +
     midGrain * 0.3 +
     coarseGrain * 0.1) - 0.5;

float flicker = (random(vec2(uTime * 0.2, 0.0)) - 0.5) * 0.002;

base += grain * 0.02 + flicker;

  gl_FragColor = vec4(vec3(base), 1.0);
}
  `,
);

extend({ GrainMaterial });

function Plane() {
  const ref = useRef<any>();

  useFrame((state) => {
    if (ref.current) {
      ref.current.uTime = state.clock.elapsedTime;
      ref.current.uResolution = [state.size.width, state.size.height];
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* @ts-ignore */}
      <grainMaterial ref={ref} />
    </mesh>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Plane />
      </Canvas>
    </div>
  );
}
