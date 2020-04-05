import * as THREE from 'three'
import { ThreeLab } from "../template"
interface IUniforms {
  u_time: { type: 'f'; value: number }
  u_resolution: { type: 'v2'; value: THREE.Vector2 }
  u_mouse: { type: 'v2'; value: THREE.Vector2 }
}

export class Lab0 extends ThreeLab {
  title = "GLSL Basic"
  uniforms: IUniforms

  constructor(container: HTMLDivElement) {
    super(container)
    this.init()
    this.animation()
  }
  init = () => {
    this.pixelRatio = 1
    this.renderSize = 512
    const { scene, camera, renderer, pixelRatio, renderSize } = this
    renderer.setSize(renderSize, renderSize, false)
    renderer.setPixelRatio(pixelRatio)
    this.container.appendChild(renderer.domElement)

    camera.position.set(1, 1, 1)
    camera.lookAt(0, 0, 0)
    this.canvas = document.querySelector('canvas')

    const geometry = new THREE.PlaneBufferGeometry(2, 2)
    this.uniforms = {
      u_time: { type: 'f', value: 1.0 },
      u_resolution: { type: 'v2', value: new THREE.Vector2(pixelRatio * renderSize, pixelRatio * renderSize) },
      u_mouse: { type: 'v2', value: new THREE.Vector2() },
    }

    var material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: require('./shaderVertex.glsl'),
      fragmentShader: require('./shaderFragment.glsl'),
    })

    var mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
  }
  animation = () => {
    const { scene, camera, renderer } = this
    this.uniforms.u_time.value += 1
    if (this.uniforms.u_time.value % 60 === 0) {
      console.log(this.uniforms.u_time.value)
    }
    renderer.render(scene, camera)
    if (!this.terminated) requestAnimationFrame(this.animation)
  }
}
