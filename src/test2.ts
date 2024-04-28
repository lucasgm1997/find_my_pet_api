class Sprite {
    name = ""
    x = 0
    y = 0

    constructor(name: string) {
        this.name = name
    }
}

type Constructor = new (...args: any[]) => {}

// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:

function Scale<TBase extends Constructor>(Base: TBase) {
    return class Scaling extends Base {
        // Mixins may not declare private/protected properties
        // however, you can use ES2020 private fields
        _scale = 1

        setScale(scale: number) {
            this._scale = scale
        }

        get scale(): number {
            return this._scale
        }
    }
}

// jump mixin
function Jump<TBase extends Constructor>(Base: TBase) {
    return class Jumping extends Base {
        jump() {
            console.log("Jump!")
        }
    }
}

const EightBitSprite = Jump(Scale(Sprite))

const flappySprite = new EightBitSprite("Bird")
flappySprite.setScale(0.8)
flappySprite.jump()

console.log(flappySprite.scale)
