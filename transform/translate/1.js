let x=10;
let dim=80;
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
background(0);
fill(255);
if(x > dim+width)
x=-dim;


translate(x,height/2-dim)
rect(x,100,dim,dim);
x+=10;

}
