uniform vec2 u_resolution;
uniform float u_time;
vec3 computeColor(vec2 p);

void main() {
  vec2 p = gl_FragCoord.xy / u_resolution.xy;
  gl_FragColor = vec4(computeColor(p), 1.0);
}

vec3 computeColor(vec2 p) {
  p -= 0.5;
  p *= 2.0;
  float r = sqrt(dot(p, p));
  float a = atan(p.y, p.x) + u_time * 0.01;
  float s = 0.5 + 0.5 * sin(3.0 * a);
  float t = 0.15 + 0.35 * pow(s, 0.2);
  t += 0.1 * pow(0.5 + 0.5 * cos(6.0 * a), 0.5);
  float h = r / t;
  float f = 0.0;
  if (h < 1.0) {
    f = 1.0;
  }
  return mix(vec3(1.0), vec3(0.5 * h, 0.5 + 0.5 * h, 0.0), f);
}

// tutorial from iq
// https://www.youtube.com/watch?time_continue=1&v=-z8zLVFCJv4&feature=emb_title
