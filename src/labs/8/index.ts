import * as THREE from 'three'
import { ThreeLab } from '../template'

export class Lab8 extends ThreeLab {
    static title = 'GLSL Shapes'
    static description = `The principles of painting with maths
    Practice according to <a target="_blank" href="https://www.youtube.com/watch?v=0ifChJ0nJfM">Inigo Quilez</a>`

    static tags = 'glsl math'

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
        this.canvas = this.container.querySelector('canvas')

        const geometry = new THREE.PlaneBufferGeometry(2, 2)
        this.uniforms = {
            u_time: { type: 'f', value: 1.0 },
            u_resolution: {
                type: 'v2',
                value: new THREE.Vector2(pixelRatio * renderSize, pixelRatio * renderSize),
            },
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
        if (!this.playing) return
        const { scene, camera, renderer } = this
        this.uniforms.u_time.value += 1
        renderer.render(scene, camera)
        if (!this.terminated) requestAnimationFrame(this.animation)
    }
}
