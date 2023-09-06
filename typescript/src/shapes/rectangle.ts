import Shape from './shape'

function newRectangle(width: number, height: number): Shape {
    const internalWidth = width
    const internalHeight = height
    return {
        computeArea():number {
            return internalWidth*internalHeight
        }
    }
}


export { newRectangle}
