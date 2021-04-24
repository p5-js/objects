let bugs=[];
function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i=0;i<50;i++){
		bugs[i]=new Jitter();
	}


}

function draw() {
background(0);
stroke("#fff");
fill("#555");
for(let i=0;i<50;i++){
	bugs[i].draw();
	bugs[i].move();
}

}



class Jitter{
	constructor(){
		this.x=random(RADIUS,windowWidth);
		this.y=random(RADIUS,windowHeight);
		this.radius=random(10,RADIUS);

	}
	draw(){
		ellipse(this.x,this.y,this.radius*2,this.radius*2);
	}
	move(){
		this.y=-1;
		this.x=-1;
	}
}