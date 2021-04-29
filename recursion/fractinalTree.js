let angle=0;

let slider=null;
function setup() {
	createCanvas(900, 600);
    slider=createSlider(0,TWO_PI,PI/4,0.001);
    // noLoop()
}

function draw() {
background(0);
stroke(255);
angle=slider.value();
translate(width/2,height);
branch(100,10,1);
}

function branch(len,linewidth,steps){
stroke(color(66,105,47+(steps*10)))

strokeWeight(linewidth);
line(0,0,0,-len);
translate(0,-len);
 
if(len > 4){
    push();
    rotate(angle);
    branch(len*0.67,linewidth*0.67,steps+1);
    pop();
    push();
    rotate(-angle);
    branch(len*0.67,linewidth*0.67,steps+1);
    pop();
} 
}