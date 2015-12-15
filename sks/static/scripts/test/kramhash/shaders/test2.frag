precision highp float;

#define Tau 6.2832
#define PI 3.14159265359
#define PI1 0.31830988618
#define Freq 100.0



varying vec2 vUv;
varying vec3 vPosition;

uniform mat4 amplitudes;
uniform float time;
uniform vec2 resolution;
uniform sampler2D tex;

void main() {
  vec2 uv = vUv;
  vec2 uv2 = uv - .5;
  float a = abs(atan(uv2.y, uv2.x));
  float r = length(uv2);
  float t = time * .1;
  float t2 = min(100., time) / 100.;
  float t3 = min(250., time) / 250.;

  float c = 7.  * cos(t + 7. * a);
  vec3 color = texture2D(tex, uv).xyz;
  vec3 color2 = texture2D(tex, vec2((a * (t3 * 2.)) * t2 + uv.x * (1. -t2), (-t + sin(r * Tau + t * t2) + tan(t3) ) * t2 + uv.y * (1. - t2) ) ).xyz;
  color = color2;
  color.x *= 1. - t3 * .5 + t3 * .7;
  color.y *= 1. - t3 * .1 + t3 * .75;
  color.z *= t3 + 1. + t3 * .75;
  color *= 1. + t3 * 1.5;// + vec3(abs(cos(2./r * 20.))) * t3;
  // color = color / dot(color, vec3(uv, 2.));

  gl_FragColor = vec4(color,1.);
}
