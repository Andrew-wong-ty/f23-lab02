import Shape from "./shape"

// Function Implementation
function newRectangle(width: number, height: number): Shape {
    let internalWidth = width;
    let internalHeight = height;
    return {
        computeArea():number {
            return internalWidth*internalHeight;
        }
    }
}

// Class Implementation
class Rectangle implements Shape {
    private width:number;
    private height:number;
    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }
    public computeArea():number {
        return this.width*this.height;
    }
}

export { Rectangle, newRectangle}
