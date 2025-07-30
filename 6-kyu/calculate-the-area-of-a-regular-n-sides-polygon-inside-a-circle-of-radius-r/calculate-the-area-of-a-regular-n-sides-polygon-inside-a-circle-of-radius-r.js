const areaOfPolygonInsideCircle= (circleRadius, numberOfSides)=> {
let area= 1/2* numberOfSides* (circleRadius**2)*Math.sin((2*Math.PI)/numberOfSides);
return Number(area.toFixed(3));
}