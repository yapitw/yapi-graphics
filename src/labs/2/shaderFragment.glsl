uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
uniform sampler2D u_picture;

bool pixelate(float value, float num, float step) {
  return (value >= num - step && value <= num + step);
}

void main() {

  vec2 position = gl_FragCoord.xy / u_resolution.xy;

  float step_x = 1. / u_resolution.x;
  float step_y = 1. / u_resolution.y;

  // vec2 value = texture2D(u_texture, position).rgb;

  vec3 value1 = texture2D(u_texture, position).rgb;
  vec3 value2 = texture2D(u_texture, position + vec2(-step_x, step_y)).rgb;
  vec3 value3 = texture2D(u_texture, position + vec2(0., step_y)).rgb;
  vec3 value4 = texture2D(u_texture, position + vec2(step_x, step_y)).rgb;
  vec3 value5 = texture2D(u_texture, position + vec2(-step_x, 0.)).rgb;
  vec3 value6 = texture2D(u_texture, position + vec2(step_x, 0.)).rgb;
  vec3 value7 = texture2D(u_texture, position + vec2(-step_x, -step_y)).rgb;
  vec3 value8 = texture2D(u_texture, position + vec2(0., -step_y)).rgb;
  vec3 value9 = texture2D(u_texture, position + vec2(step_x, -step_y)).rgb;

  vec3 value = (value1 + value2 + value3 + value4 + value5 + value6 + value7 +
                value8 + value9) /
               vec3(9., 9., 9.);

  if (pixelate(position.x, 0.5, 3. * step_x) &&
      pixelate(position.y, 0.5, 3. * step_y)) {
    value = vec3(1., 1., 1.);
  };

  // vec2 st = gl_FragCoord.xy / u_resolution.xy;
  gl_FragColor = vec4(value.x, value.y, value.z, 1.0);
}
