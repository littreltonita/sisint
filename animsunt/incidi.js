// Define control points
let controlPoints = [
    [100, 100],   // P0
    [150, 300],   // P1
    [300, 50],    // P2
    [400, 200]    // P3
];

// Create a Bezier curve function
let bezierCurve = bezier(controlPoints);

// Calculate points on the curve for various t values
for (let t = 0; t <= 1; t += 0.1) {
    let point = bezierCurve(t);
    console.log(`t = ${t.toFixed(1)}, point = (${point[0].toFixed(2)}, ${point[1].toFixed(2)})`);
}
