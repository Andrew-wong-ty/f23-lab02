import Shape from "./shape"

// Function Implementation
function circle(radius: number): Shape {
    let circleRadius = radius;
    return {
        computeArea: function (): number {
            return Math.PI * circleRadius * circleRadius
        }
    }
}

// Class Implementation
class Circle implements Shape {
    private radius:number;
    constructor(radius: number) {
        this.radius = radius;
    }
    public computeArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
export { circle, Circle }
