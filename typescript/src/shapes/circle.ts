import Shape from './shape'

function newCircle(radius: number): Shape {
    const circleRadius = radius
    return {
        computeArea: function (): number {
            return Math.PI * circleRadius * circleRadius
        }
    }
}


export { newCircle }
