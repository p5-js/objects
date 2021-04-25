const RADIUS=50;
let bugs=[];
function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i=0;i<50;i++){
		bugs.push(new Jitter())
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
		this.x=random(width);
		this.y=random(height);
		this.radius=random(10,RADIUS);
		this.speed=random(3);

	}
	draw(){
		ellipse(this.x,this.y,this.radius*2,this.radius*2);
	}
	move(){
		this.y+=random(-this.speed,this.speeed)
		this.x+=random(-this.speed,this.speeed)
	}
}