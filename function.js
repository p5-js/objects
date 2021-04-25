let y=0,x=0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// noLoop();
	// noStroke();
	frameRate(10000)


}

function draw() {
	background(66);
    x+=1;
	y+=0.4;

	// drawTarget(width*0.25,height/2,300,10);
	drawTarget(x,y,100,16);
	// drawTarget(width*0.75,height/2,120,4);

}
function drawTarget(left,top,diameter,num){
	
	let gravyValues=255/num;
	let steps=diameter/num;
	strokeWeight(4);
    stroke(51);
	for(let i=0;i<num ;i++){
		noStroke()
		fill(i*gravyValues);
		
		// noFill();
		ellipse(left,top,diameter-(i*steps),diameter-(i*steps));
	}
	noFill();
	stroke(255);
	ellipse(left,top,diameter+50,diameter+50);
}