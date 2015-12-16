precision highp float;

#define Tau 6.2832
#define PI 3.14159265359
#define PI1 0.31830988618
#define Freq 100.0

const vec3 white = vec3(1., 1., 1.);
const vec3 blue = vec3(.45934, .91234, 1.);

varying vec2 vUv;
varying vec3 vPosition;

uniform mat4 amplitudes;
uniform float time;
uniform vec2 resolution;
uniform sampler2D tex;
uniform float strength;
uniform sampler2D mask;


void main() {
  vec2 uv = vUv;
  vec2 uv2 = uv - .5;
  float a = abs(atan(uv2.y, uv2.x));
  float r = length(uv2) + sin(a) * .1;

  float _time = time * .25;
  float t = _time * .1;
  float t2 = min(100., _time) / 100.;
  float t3 = min(250., _time) / 250.;


  vec3 maskColor = texture2D(mask, vec2(a + mod(t, 2.), r * .5 + t * .25)).xyz;

  t2 = t2 - strength;
  float c = 7.  * cos(t + 7. * a);
  vec3 color = texture2D(tex, uv).xyz;
  vec3 color2 = texture2D(tex, vec2((a * (t3 * 2.)) * t2 + uv.x * (1. -t2), (-t + sin(r * Tau + t * t2) + tan(t3) ) * t2 + uv.y * (1. - t2) ) ).xyz;
  color2 = 1. - (1. - color2) * (1. - color2);
  color = color2 * (1. - maskColor * t3) + (maskColor * t3 * .2);

  vec3 screenColor = 1. - (1. - color) * (1. - blue);
  color = color + screenColor * .5 * t3;

  // color.x *= 1. - t3 * .5 + t3 * .7;
  // color.y *= 1. - t3 * .1 + t3 * .75;
  // color.z *= t3 + 1. + t3 * .75;
  // color *= 1. + t3 * 1.5;// + vec3(abs(cos(2./r * 20.))) * t3;
  // color = color / dot(color, vec3(uv, 2.));
  // color *= (1. - maskColor * 2.) * t3;
  // color = white - (white - color) * (white - maskColor);


  gl_FragColor = vec4(color,1.);
}
