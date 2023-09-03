import { Renderer } from "./renderer.js"
import { Rectangle} from "./shapes/rectangle.js";
import Shape from "./shapes/shape.js";

// const rectangle: Rectangle = newRectangle(2, 3)
const rectangle: Shape = new Rectangle(2, 3);
const renderer = new Renderer(rectangle);
renderer.draw();