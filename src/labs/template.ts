import * as THREE from 'three'

interface IUniforms {
  u_time?: { type: 'f'; value: number }
  u_resolution?: { type: 'v2'; value: THREE.Vector2 }
  u_mouse?: { type: 'v2'; value: THREE.Vector2 }
  u_texture?: { type: 't'; value: THREE.Texture }
}

export class ThreeLab {
  container: HTMLDivElement
  camera: THREE.OrthographicCamera
  scene: THREE.Scene
  renderer: THREE.WebGLRenderer
  canvas: HTMLCanvasElement
  pixelRatio: number = 1
  renderSize: number = 512
  uniforms: IUniforms
  terminated: boolean = false

  animation: () => void

  constructor(container: HTMLDivElement) {
    this.container = container
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(-2, 2, -2, 2)
    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.container.appendChild(this.renderer.domElement)
  }
}
