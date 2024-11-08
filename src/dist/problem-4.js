"use strict";
// problem-4
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        throw new Error("Unknown shape type");
    }
}
calculateShapeArea({ shape: "circle", radius: 5 });
calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
