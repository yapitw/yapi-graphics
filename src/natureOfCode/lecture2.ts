import p5 from "p5"

export const lecture2_1 = (s: p5) => {
  class Mover {
    s: p5
    pos: p5.Vector
    vel: p5.Vector
    acc: p5.Vector
    r: number

    constructor(x: number, y: number, s: p5) {
      this.s = s
      this.pos = s.createVector(x, y)
      this.vel = p5.Vector.random2D()
      this.vel.mult(s.random(3))
      this.acc = s.createVector(0, 0)
      this.r = 16
    }

    applyForce(force: p5.Vector) {
      this.acc.add(force);
    }

    edges() {
      const { s } = this
      if (this.pos.y <= 0 + this.r) {
        this.pos.y = 0 + this.r
        this.vel.y *= -1
      }
      if (this.pos.y >= s.height - this.r) {
        this.pos.y = s.height - this.r
        this.vel.y *= -1
      }
      if (this.pos.x <= 0 + this.r) {
        this.pos.x = 0 + this.r
        this.vel.x *= -1
      }
      if (this.pos.x >= s.width - this.r) {
        this.pos.x = s.width - this.r
        this.vel.x *= -1
      }
    }

    update() {
      this.vel.add(this.acc)
      this.pos.add(this.vel)
      this.acc.set(0, 0)
    }

    show() {
      s.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }
  }

  let mover: Mover

  s.setup = () => {
    s.createCanvas(400, 400)
    s.background(0)
    mover = new Mover(200, 200, s)
  }

  s.draw = () => {
    s.stroke(255, 100)
    s.strokeWeight(2)
    s.background(0)

    const wind = s.createVector(0.2, 0)
    if (s.mouseIsPressed) {
      mover.applyForce(wind)
    }

    const gravity = s.createVector(0, 0.98)
    mover.applyForce(gravity)

    mover.update()
    mover.edges()
    mover.show()
  }
}
lecture2_1.title = "Force - Simulating Forces: Gravity and Wind"


export const lecture2_2 = (s: p5) => {
  class Mover {
    s: p5
    pos: p5.Vector
    vel: p5.Vector
    acc: p5.Vector
    r: number
    mass: number

    constructor(x: number, y: number, mass: number, s: p5) {
      this.s = s
      this.pos = s.createVector(x, y)
      this.vel = s.createVector(0, 0)
      this.acc = s.createVector(0, 0)
      this.r = Math.sqrt(mass) * 10
      this.mass = mass
    }

    applyForce(force: p5.Vector) {
      const f = p5.Vector.div(force, this.mass)
      this.acc.add(f);
    }

    edges() {
      const { s } = this
      if (this.pos.y <= 0 + this.r) {
        this.pos.y = 0 + this.r
        this.vel.y *= -1
      }
      if (this.pos.y >= s.height - this.r) {
        this.pos.y = s.height - this.r
        this.vel.y *= -1
      }
      if (this.pos.x <= 0 + this.r) {
        this.pos.x = 0 + this.r
        this.vel.x *= -1
      }
      if (this.pos.x >= s.width - this.r) {
        this.pos.x = s.width - this.r
        this.vel.x *= -1
      }
    }

    update() {
      this.vel.add(this.acc)
      this.pos.add(this.vel)
      this.acc.set(0, 0)
    }

    show() {
      s.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }
  }

  let moverA: Mover
  let moverB: Mover

  s.setup = () => {
    s.createCanvas(400, 400)
    s.background(0)
    moverA = new Mover(100, 200, 10, s)
    moverB = new Mover(300, 200, 1, s)
  }

  s.draw = () => {
    s.stroke(255, 100)
    s.strokeWeight(2)
    s.background(0)

    const wind = s.createVector(0.2, 0)
    if (s.mouseIsPressed) {
      moverA.applyForce(wind)
      moverB.applyForce(wind)
    }

    const gravity = s.createVector(0, 1)
    const weightA = p5.Vector.mult(gravity, moverA.mass)
    const weightB = p5.Vector.mult(gravity, moverB.mass)
    moverA.applyForce(weightA)
    moverB.applyForce(weightB)

    moverA.update()
    moverA.edges()
    moverA.show()

    moverB.update()
    moverB.edges()
    moverB.show()

  }
}
lecture2_2.title = "Force - Mass and Acceleration"
