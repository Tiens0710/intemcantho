"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ───────────────── GLSL Shaders ───────────────── */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  varying vec2 vUv;

  // Simplex-style hash
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;

    // Normalize mouse to -1..1
    vec2 mouse = uMouse * 2.0 - 1.0;

    // Multi-octave noise for energy wave
    float n1 = snoise(uv * 2.0 + uTime * 0.12 + mouse * 0.1);
    float n2 = snoise(uv * 4.0 - uTime * 0.08);
    float n3 = snoise(uv * 8.0 + uTime * 0.04);
    float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

    // Dark base — near black with warm undertone
    vec3 darkBase  = vec3(0.102, 0.059, 0.02);   // #1a0f05
    vec3 darkMid   = vec3(0.176, 0.094, 0.063);  // warm dark brown
    vec3 amberGlow = vec3(0.85, 0.65, 0.31);     // golden amber

    // Mix dark tones based on noise
    float t = noise * 0.5 + 0.5;
    vec3 baseColor = mix(darkBase, darkMid, smoothstep(0.2, 0.6, t));

    // Radial gradient — slightly lighter center
    float dist = length((uv - 0.5) * vec2(aspect, 1.0));
    float vignette = smoothstep(0.9, 0.0, dist);
    baseColor = mix(baseColor, darkMid, vignette * 0.3);

    // Energy wave highlight — subtle amber streaks
    float wave = sin(uv.x * 6.28 * 3.0 + uTime * 0.4 + noise * 4.0) * 0.5 + 0.5;
    wave *= exp(-abs(uv.y - 0.5 - mouse.y * 0.1) * 5.0);
    baseColor += amberGlow * wave * 0.02;

    // Subtle amber glow near mouse position
    float mouseGlow = exp(-length(uv - vec2(mouse.x * 0.5 + 0.5, mouse.y * 0.5 + 0.5)) * 2.5);
    baseColor += amberGlow * mouseGlow * 0.04;

    // Noise-driven subtle color shift
    baseColor += amberGlow * noise * 0.04;

    // Vignette darkening at edges
    float edgeVignette = smoothstep(0.4, 1.2, dist);
    baseColor *= (1.0 - edgeVignette * 0.5);

    gl_FragColor = vec4(baseColor, 1.0);
  }
`;

/* ───────────────── Shader Plane ───────────────── */

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef(new THREE.Vector2(0.5, 0.5));
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;

    (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value =
      state.clock.elapsedTime;

    const pointer = state.pointer;
    targetMouse.current.set(
      (pointer.x + 1) / 2,
      (pointer.y + 1) / 2
    );
    mouseRef.current.lerp(targetMouse.current, 0.05);
    (
      meshRef.current.material as THREE.ShaderMaterial
    ).uniforms.uMouse.value.copy(mouseRef.current);

    const size = state.size;
    (
      meshRef.current.material as THREE.ShaderMaterial
    ).uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

/* ───────────────── WebGLBackground Export ───────────────── */

export default function WebGLBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 50 }}
      gl={{ antialias: false, alpha: false }}
      dpr={[1, 1.5]}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ShaderPlane />
    </Canvas>
  );
}