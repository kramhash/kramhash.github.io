precision highp float;


#define Tau 6.2832
#define PI 3.14159265359
#define PI1 0.31830988618
#define Freq 100.0


varying vec2 vUv;

uniform mat4 amplitudes;
uniform float time;
uniform vec2 resolution;

float circle(vec2 position) {
  vec2 nearest = 2.0 * fract(Freq * position) - 1.;
  float dist = length(nearest);
  return step(dist, .5);
}

void main(void) {
  vec4 amp1 = amplitudes[0] / 256.;

  float x = vUv.x - .5;
  float y = vUv.y - .5;
  // vec3 position = vec3(x, y, fract(time * .001));
  // vec2 resolution = vec2(1024., 768.);
  vec3 position = vec3((gl_FragCoord.xy - resolution / 2.) / resolution.y, fract(time * .1));
  float len = length(position);
  float angle = abs(atan(y, x) * PI1);

  // len = pow(len, .5);
  vec3 color = vec3(0.);
  // color.x = mod(16., angle * amp1.x);
  float c = mod(4., len * amp1.y) * amp1.z * abs(sin(1./amp1.x));
  // color.x = mod(2., (vUv.x + vUv.y) * amp1.x) * PI1;

  float strength = (amp1.x + amp1.y + amp1.z + amp1.w) / 4.;

  // for(int i = 0; i < 4; i++) {
  //   // position = abs( tan(atan(abs(atan(position))) / dot(position, sin(.5 * position)) ) );
  // }

  for (int i = 0; i < 1; i++) {
    color.xyz += abs(tan(atan(abs(atan(position)))) / dot(position, sin(.5 * position)));
    color.xyz += circle(vUv * amp1.xy) * .5 * amp1.z * strength;
  }
  color *= c;


  // color = position;
  // float color = 1.;
  // vec2 uv = vUv;
  // float r = fract(sin(uv.x * 10.) * time);
  // gl_FragColor = vec4(r, vUv.y * cos(time), 0., 1.);
  gl_FragColor = vec4(color.xyz * pow(strength, 2.), 1.);
}
