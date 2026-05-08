/**
 * WebGL Water/Liquid Displacement Transition — v3
 *
 * Directional wipe from right → left with water ripple distortion
 * concentrated at the wavefront edge, matching the "Marry & Sweet" reference.
 */

const VERT = /* glsl */ `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAG = /* glsl */ `
precision highp float;

uniform sampler2D u_from;
uniform sampler2D u_to;
uniform sampler2D u_disp;
uniform float u_progress;
uniform float u_intensity;
uniform vec2 u_res;
uniform vec2 u_fromRes;
uniform vec2 u_toRes;

varying vec2 v_uv;

vec2 coverUV(vec2 uv, vec2 imgRes, vec2 scrRes) {
  float sa = scrRes.x / scrRes.y;
  float ia = imgRes.x / imgRes.y;
  vec2 st = vec2(1.0);
  if (sa > ia) { st.y = ia / sa; }
  else         { st.x = sa / ia; }
  return (uv - 0.5) * st + 0.5;
}

void main() {
  /* Sample displacement map — R for X, G for Y */
  vec4 d = texture2D(u_disp, v_uv);
  vec2 disp = (d.rg - 0.5) * 2.0;

  float p = u_progress;

  /* ── Directional wipe: right → left ── */
  /* Wavefront edge moves from right (1.0) to left (0.0) */
  float edge = 1.0 - p * 1.2 + 0.1;  /* slight overshoot for clean finish */

  /* Distance from wavefront; noise perturbs the edge for organic feel */
  float noiseEdge = disp.x * 0.08;
  float dist = v_uv.x - edge + noiseEdge;

  /* Transition zone width — wider = softer blend */
  float zoneWidth = 0.22;

  /* Blend factor: 0 = show "from", 1 = show "to" */
  float blend = smoothstep(-zoneWidth, zoneWidth, dist);

  /* ── Water distortion strongest at the wavefront ── */
  /* Gaussian falloff centered on the edge */
  float distMask = exp(-(dist * dist) / (zoneWidth * zoneWidth * 2.0));

  /* Ripple strength */
  float strength = u_intensity * distMask;

  /* Distort UVs */
  vec2 uv1 = coverUV(v_uv + disp * strength, u_fromRes, u_res);
  vec2 uv2 = coverUV(v_uv - disp * strength * 0.6, u_toRes, u_res);

  /* Chromatic aberration near wavefront */
  float aberr = strength * 0.008;
  vec2 aberrDir = vec2(aberr, aberr * 0.5);

  vec4 c1 = vec4(
    texture2D(u_from, uv1 + aberrDir).r,
    texture2D(u_from, uv1).g,
    texture2D(u_from, uv1 - aberrDir).b,
    1.0
  );
  vec4 c2 = vec4(
    texture2D(u_to, uv2 + aberrDir).r,
    texture2D(u_to, uv2).g,
    texture2D(u_to, uv2 - aberrDir).b,
    1.0
  );

  gl_FragColor = mix(c1, c2, blend);
}`;

// ── Helpers ──────────────────────────────────────────────

function compileShader(gl: WebGLRenderingContext, src: string, type: number) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(s));
  }
  return s;
}

function createProgram(gl: WebGLRenderingContext) {
  const p = gl.createProgram()!;
  gl.attachShader(p, compileShader(gl, VERT, gl.VERTEX_SHADER));
  gl.attachShader(p, compileShader(gl, FRAG, gl.FRAGMENT_SHADER));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(p));
  }
  return p;
}

/**
 * Generate 512×512 displacement map with visible water-like ripple patterns.
 * Uses layered value noise with large + medium scales for organic wave feel.
 */
function generateNoiseTexture(gl: WebGLRenderingContext): WebGLTexture {
  const size = 512;
  const data = new Uint8Array(size * size * 4);

  const hash = (x: number, y: number, seed: number) => {
    let n = Math.sin(x * 127.1 + y * 311.7 + seed * 1731.3) * 43758.5453123;
    return n - Math.floor(n);
  };

  const smoothNoise = (px: number, py: number, seed: number) => {
    const ix = Math.floor(px), iy = Math.floor(py);
    const fx = px - ix, fy = py - iy;
    const ux = fx * fx * fx * (fx * (fx * 6 - 15) + 10);
    const uy = fy * fy * fy * (fy * (fy * 6 - 15) + 10);
    const a = hash(ix, iy, seed), b = hash(ix + 1, iy, seed);
    const c = hash(ix, iy + 1, seed), d = hash(ix + 1, iy + 1, seed);
    return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
  };

  const fbm = (x: number, y: number, seed: number) => {
    let val = 0, amp = 1, freq = 1, maxAmp = 0;
    for (let o = 0; o < 5; o++) {
      val += smoothNoise(x * freq, y * freq, seed) * amp;
      maxAmp += amp;
      amp *= 0.5;
      freq *= 2.0;
    }
    return val / maxAmp;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size * 4;
      const ny = y / size * 4;

      // R = horizontal displacement
      const r = fbm(nx, ny, 0);
      // G = vertical displacement (different seed)
      const g = fbm(nx + 5.2, ny + 1.3, 100);
      // B = extra variation
      const b = fbm(nx * 1.3 + 0.7, ny * 1.3 + 3.1, 50);

      const idx = (y * size + x) * 4;
      data[idx]     = Math.floor(r * 255);
      data[idx + 1] = Math.floor(g * 255);
      data[idx + 2] = Math.floor(b * 255);
      data[idx + 3] = 255;
    }
  }

  const tex = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  return tex;
}

function uploadImageTexture(gl: WebGLRenderingContext, img: HTMLImageElement): WebGLTexture {
  const tex = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  return tex;
}

// ── Main Class ───────────────────────────────────────────

export interface ImageEntry {
  src: string;
  width: number;
  height: number;
  texture: WebGLTexture;
}

export class WaterTransition {
  private gl: WebGLRenderingContext;
  private program: WebGLProgram;
  private dispTex: WebGLTexture;
  private images: ImageEntry[] = [];
  private currentIndex = 0;
  private loc: Record<string, WebGLUniformLocation | null> = {};
  private rendering = false;
  private rafId = 0;

  progress = 0;

  constructor(private canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl', {
      alpha: false, antialias: false, premultipliedAlpha: false,
    })!;
    this.gl = gl;
    this.program = createProgram(gl);
    gl.useProgram(this.program);

    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(this.program, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const names = ['u_from', 'u_to', 'u_disp', 'u_progress', 'u_intensity', 'u_res', 'u_fromRes', 'u_toRes'];
    names.forEach(n => { this.loc[n] = gl.getUniformLocation(this.program, n); });

    this.dispTex = generateNoiseTexture(gl);

    gl.uniform1i(this.loc.u_from, 0);
    gl.uniform1i(this.loc.u_to, 1);
    gl.uniform1i(this.loc.u_disp, 2);
    gl.uniform1f(this.loc.u_intensity, 0.35);

    this.resize();
  }

  async loadImages(urls: string[]): Promise<void> {
    const gl = this.gl;
    const promises = urls.map(src =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      }),
    );
    const imgs = await Promise.all(promises);
    this.images = imgs.map(img => ({
      src: img.src,
      width: img.naturalWidth,
      height: img.naturalHeight,
      texture: uploadImageTexture(gl, img),
    }));
    if (this.images.length > 0) {
      this.currentIndex = 0;
      this.renderFrame(0, 0, 0);
    }
  }

  renderFrame(fromIdx: number, toIdx: number, progress: number) {
    const gl = this.gl;
    const from = this.images[fromIdx];
    const to = this.images[toIdx] || from;
    if (!from) return;

    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, from.texture);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, to.texture);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, this.dispTex);

    gl.uniform1f(this.loc.u_progress, progress);
    gl.uniform2f(this.loc.u_res, this.canvas.width, this.canvas.height);
    gl.uniform2f(this.loc.u_fromRes, from.width, from.height);
    gl.uniform2f(this.loc.u_toRes, to.width, to.height);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  private startLoop(fromIdx: number, toIdx: number) {
    if (this.rendering) return;
    this.rendering = true;
    const tick = () => {
      this.renderFrame(fromIdx, toIdx, this.progress);
      if (this.rendering) this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  stopLoop() { this.rendering = false; cancelAnimationFrame(this.rafId); }

  beginTransition(toIdx: number) {
    this.progress = 0;
    this.startLoop(this.currentIndex, toIdx);
  }

  completeTransition(toIdx: number) {
    this.stopLoop();
    this.currentIndex = toIdx;
    this.progress = 0;
    // Defer render to next frame so the render loop is fully stopped
    requestAnimationFrame(() => {
      this.renderFrame(toIdx, toIdx, 0);
    });
  }

  showSlide(idx: number) {
    this.currentIndex = idx;
    this.renderFrame(idx, idx, 0);
  }

  get current() { return this.currentIndex; }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = this.canvas.clientWidth * dpr;
    const h = this.canvas.clientHeight * dpr;
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
    if (this.images.length && !this.rendering) {
      this.renderFrame(this.currentIndex, this.currentIndex, 0);
    }
  }

  setIntensity(val: number) {
    this.gl.useProgram(this.program);
    this.gl.uniform1f(this.loc.u_intensity, val);
  }

  destroy() {
    this.stopLoop();
    const gl = this.gl;
    this.images.forEach(e => gl.deleteTexture(e.texture));
    gl.deleteTexture(this.dispTex);
    gl.deleteProgram(this.program);
  }
}
