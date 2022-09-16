// This file was auto-generated with shader-converter.py.
// It contains a javascript version of all shader code.

const lineFragmentSource = `

precision mediump float;

varying mediump vec3 vColor;
varying mediump vec3 vNormal;

uniform mediump vec3 ambientLight;
uniform mediump vec3 sunlightAngle;
uniform mediump float sunlightIntensity;

void main(void) {
    // vec3 color = vColor * ambientLight * dot(sunlightAngle, vNormal) * sunlightIntensity;
    // vec3 color = vec3(0.95, 1, 0.28);
    // gl_FragColor = vec4(color.x, color.y, color.z, 1);
    gl_FragColor = vec4(vColor.x, vColor.y, vColor.z, 1);
}
`

const lineVertexSource = `
attribute vec4 vertexPosition;
attribute vec3 vertexNormal;
attribute vec3 vertexColor;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 transformMatrix;
uniform vec4 dominatingColor;
// uniform vec4 projectionMatrix;
// uniform vec3 ambientLight;
// uniform vec3 sunlightAngle;
// uniform float sunlightIntensity;

varying mediump vec3 vColor;
varying mediump vec3 vNormal;
// varying lowp vec3 vColor;

void main() {
    vColor = vertexColor;
    // vNormal = vertexNormal;
    // gl_Position = projectionMatrix * vertexPosition;
    gl_Position = projectionMatrix * vertexPosition;
    // float lighting = dot(sunlightAngle, vertexNormal);
    // vColor = vec3(1, 1, 1) * ambientLight * dot(sunlightAngle, vertexNormal) * sunlightIntensity;

}
`

const litFragmentSource = `
precision mediump float;

varying mediump vec3 vColor;
varying mediump vec2 vUV1;
varying mediump vec3 vNormal;

uniform sampler2D uSampler;
uniform mediump vec3 ambientLight;
uniform mediump vec3 sunlightAngle;
uniform mediump float sunlightIntensity;

void main(void) {
    float sunlight = dot(sunlightAngle, vNormal) * sunlightIntensity;
    vec3 color = vColor * ambientLight * sunlight;
    // vec3 color = vec3(0.95, 1, 0.28);

    // vec4 lightingColor = vec4(1,1,1,1) * sunlight;
    // 
    vec4 textureSample = texture2D(uSampler, vUV1);
    vec4 litTexture = vec4(color.x, color.y, color.z, 1) * textureSample;
    // gl_FragColor = color * 0.2;
    gl_FragColor = vec4(color.x, color.y, color.z, 1);
    // gl_FragColor = litTexture;
    // gl_FragColor = textureSample * lightingColor;
    // gl_FragColor = vec4(vColor.x, vColor.y, vColor.z, 1);
}
`

const litVertexSource = `
attribute vec4 vertexPosition;
attribute vec2 vertexUV1;
attribute vec3 vertexNormal;
attribute vec3 vertexColor;

uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;
uniform mat4 transformMatrix;
uniform vec4 dominatingColor;
// uniform vec3 ambientLight;
// uniform vec3 sunlightAngle;
// uniform float sunlightIntensity;

varying mediump vec3 vColor;
varying mediump vec3 vNormal;
varying mediump vec2 vUV1;
// varying lowp vec3 vColor;

void main() {
    // vec4 v = vec4(aVertexPosition, 1.0);
    // vec4 v = vec4(vertexPosition.x, vertexPosition.y, vertexPosition.z, 1.0);
    // vec4 newPosition = modelViewMatrix * v;
    // vec4 projectedPosition = projectionMatrix * newPosition;
    vColor = vertexColor;
    vUV1 = vertexUV1;
    vNormal = vertexNormal;

    gl_Position = transformMatrix * vertexPosition;
    // float lighting = dot(sunlightAngle, vertexNormal);
    // vColor = vec3(1, 1, 1) * ambientLight * dot(sunlightAngle, vertexNormal) * sunlightIntensity;

}
`

