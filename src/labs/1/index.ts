import * as THREE from 'three'
import { ThreeLab } from '../template'

export class Lab1 extends ThreeLab {
    static title = 'GLSL Texture'
    static tags = 'glsl three.js'
    static description = ''

    mesh: THREE.Mesh

    constructor(container: HTMLDivElement) {
        super(container)
        this.init()
        this.animation()
    }
    init = () => {
        this.pixelRatio = window.devicePixelRatio
        this.renderSize = 512
        const { scene, camera, renderer, pixelRatio, renderSize } = this
        renderer.setSize(renderSize, renderSize, false)
        renderer.setPixelRatio(pixelRatio)

        camera.position.set(1, 1, 1)
        camera.lookAt(0, 0, 0)
        this.canvas = document.querySelector('canvas')

        this.uniforms = { u_time: { type: 'f', value: 1.0 } }

        const material = new THREE.RawShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: require('./shaderVertex.glsl'),
            fragmentShader: require('./shaderFragment.glsl'),
            transparent: true,
            depthWrite: false,
            depthTest: false,
            // blending: THREE.AdditiveBlending,
            wireframe: false,
            side: THREE.DoubleSide,
        })
        const geometry = new THREE.TorusKnotBufferGeometry(
            1,
            0.25,
            200,
            18,
            4,
            3
        )
        this.mesh = new THREE.Mesh(geometry, material)
        scene.add(this.mesh)
    }

    animation = () => {
        const { scene, camera, renderer } = this
        this.uniforms.u_time.value += 0.005
        renderer.render(scene, camera)
        requestAnimationFrame(this.animation)
        if (!this.terminated) this.mesh.rotateY(-0.05)
    }
}
