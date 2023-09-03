import { Rectangle } from "./shapes/rectangle.js";
import Shape from "./shapes/shape.js";

function newRenderer(shape: Shape) {
    let internalShape: Shape = shape; // make private
    return {
        draw() {
            const area: number = internalShape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

class Renderer {
    private shape:Shape;
    constructor(shape:Shape) {
        this.shape = shape;
    }
    public draw(): void {
        const area: number = this.shape.computeArea()
        console.log("Shape drawn\n" + "Its area is " + area)
    }
}

export { Renderer }