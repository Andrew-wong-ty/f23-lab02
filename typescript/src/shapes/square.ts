import Shape from './shape'

function newSquare(sideLen: number): Shape {
    const squareSideLen = sideLen // make sideLen private
    return {
        computeArea: function (): number {
            return squareSideLen * squareSideLen
        }
    }
}

export { newSquare }