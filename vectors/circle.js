let a,b;
function setup() {
	createCanvas(windowWidth, windowHeight);
    noLoop();
     a=createVector(100,100);
     b=createVector(100,400);
     
 

}
function draw() {
background(0);
stroke("#fff");
ellipse(a.x,a.y,40,40);
ellipse(b.x,b.y,40,40);
let v=p5.Vector.sub(b,a);
fill("red")
ellipse(v.x,v.y,40,40);

}
