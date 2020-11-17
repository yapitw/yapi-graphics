import * as THREE from 'three'
import { ThreeLab } from '../template'

const texture = new THREE.TextureLoader().load('dist/doodle.png')

interface IUniforms {
    u_time: { type: 'f'; value: number }
    u_resolution: { type: 'v2'; value: THREE.Vector2 }
    u_mouse: { type: 'v2'; value: THREE.Vector2 }
    u_texture: { type: 't'; value: THREE.Texture }
    u_picture: { type: 't'; value: THREE.Texture }
}

export class Lab3 extends ThreeLab {
    static title = 'Reaction Diffusion'
    static tags = 'glsl reaction-diffusion three.js'
    static description = ''

    uniforms: IUniforms
    textBuffer1: THREE.WebGLRenderTarget
    textBuffer2: THREE.WebGLRenderTarget
    switchTag: boolean

    constructor(container: HTMLDivElement) {
        super(container)
        this.init()
        this.animation()
    }

    init = () => {
        this.pixelRatio = 1
        this.renderSize = 512
        this.switchTag = false

        const { scene, camera, renderer, pixelRatio, renderSize } = this

        renderer.setSize(renderSize, renderSize, false)
        renderer.setPixelRatio(pixelRatio)

        camera.position.set(1, 1, 1)
        camera.lookAt(0, 0, 0)

        this.canvas = this.container.querySelector('canvas')
        this.canvas.style.filter =
            'saturate(0) brightness(1.2) contrast(2) invert(1)'
        const geometry = new THREE.PlaneBufferGeometry(2, 2)
        this.uniforms = {
            u_time: { type: 'f', value: 0 },
            u_resolution: { type: 'v2', value: new THREE.Vector2() },
            u_mouse: { type: 'v2', value: new THREE.Vector2() },
            u_texture: { type: 't', value: undefined },
            u_picture: { type: 't', value: texture },
        }

        var material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: require('./shaderVertex.glsl'),
            fragmentShader: require('./shaderFragment.glsl'),
        })

        var mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const targetOptions = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            // type: THREE.FloatType,
            type: THREE.HalfFloatType, // for ios compatibility
            wrapS: THREE.RepeatWrapping,
            wrapT: THREE.RepeatWrapping,
        }
        this.textBuffer1 = new THREE.WebGLRenderTarget(
            renderSize * pixelRatio,
            renderSize * pixelRatio,
            targetOptions
        )
        this.textBuffer2 = new THREE.WebGLRenderTarget(
            renderSize * pixelRatio,
            renderSize * pixelRatio,
            targetOptions
        )

        this.uniforms.u_resolution.value.x = renderSize * pixelRatio
        this.uniforms.u_resolution.value.y = renderSize * pixelRatio

        document.onmousemove = (e) => {
            const x = e.pageX - this.container.offsetLeft
            const y = e.pageY - this.container.offsetTop
            this.uniforms.u_mouse.value.x = x
            this.uniforms.u_mouse.value.y = y
        }
    }

    animation = () => {
        if (!this.playing) return
        const { scene, camera, renderer } = this
        for (let i = 0; i < 24; i++) {
            this.uniforms.u_texture.value = this[
                this.switchTag ? 'textBuffer1' : 'textBuffer2'
            ].texture
            renderer.setRenderTarget(
                this[this.switchTag ? 'textBuffer2' : 'textBuffer1']
            )
            renderer.render(scene, camera)
            this.uniforms.u_texture.value = this[
                this.switchTag ? 'textBuffer2' : 'textBuffer1'
            ].texture
            this.switchTag = !this.switchTag
            this.uniforms.u_time.value += 1
        }

        renderer.setRenderTarget(null)
        renderer.render(scene, camera)
        if (!this.terminated) requestAnimationFrame(this.animation)
    }
}
