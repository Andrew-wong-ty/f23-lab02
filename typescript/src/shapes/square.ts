import Shape from "./shape"

function square(sideLen: number): Shape {
    let squareSideLen = sideLen; // make sideLen private
    return {
        computeArea: function (): number {
            return squareSideLen * squareSideLen
        }
    }
}

export { square }