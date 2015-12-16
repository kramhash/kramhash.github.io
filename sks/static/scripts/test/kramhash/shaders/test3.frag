precision highp float;

varying vec2 vUv;

uniform sampler2D tex;
uniform float time;
uniform sampler2D mask;

void main() {
  vec3 color;
  vec2 uv = vUv;
  vec2 uv2 = uv - .5;
  float r, g, b;

  // float r = length(uv2);
  // float a = atan(uv2.y, uv2.x);
  // vec3 color = vec3(cos(r * 50.));
  color = texture2D(tex, uv).xyz;
  color.xy = vec2(0.);
  color.z = pow(max(.1, color.z), .2);


  r = texture2D(tex, uv).x;
  g = texture2D(tex, uv + vec2(time * .001, 0.)).y;
  b = texture2D(tex, uv + vec2(-.1, 0.)).z;
  color = vec3(r,g,b);
  vec3 maskColor = texture2D(mask, uv).xyz;
  gl_FragColor = vec4(color, 1.);
}
