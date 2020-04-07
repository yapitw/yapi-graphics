uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 p = gl_FragCoord.xy / u_resolution.xy;
  vec2 q = p - vec2(0.5, 0.5);
  vec3 col = vec3(1.0, 0.4, 0.1);
  float r = 0.2 + 0.1 * cos(atan(q.y, q.x) * 10.0);
  // cos: cosine
  // atan: arctangent - returns angle in radians
  
  col *= smoothstep(r, r + 0.005, length(q));

  gl_FragColor = vec4(col, 1.0);
}