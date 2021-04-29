function setup(){
createCanvas(windowWidth,windowHeight);
noLoop();
noStroke();
}

function draw(){

    drawCircle(200,width/2,6)
}

function drawCircle(radius,x,level){
if(level > 0){
    let color=126+(level*10);
    if(color > 255)color=126;
    fill(color);
    ellipse(x,height/2,radius*2,radius*2);
    level--;
    radius/=2;
   
    drawCircle(radius,x-radius,level);
    drawCircle(radius,x+radius,level);
}
}