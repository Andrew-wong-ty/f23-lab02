import Shape from './shapes/shape.js'

function newRenderer(shape: Shape) {
    const internalShape: Shape = shape // make private
    return {
        draw() {
            const area: number = internalShape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }
