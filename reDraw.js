let y=[];

function setup() {
	createCanvas(windowWidth, windowHeight);
    stroke("#fff");
    let dy=10;
    y.length=floor(height/dy);
    for(let i=1;i< y.length;i++){
    y[i]=dy*i;
    }
    noLoop();
    
}

function draw() {
    background(0);
    for(let i=0;i<y.length;i++){
        if(y[i] < 0)
        y[i]=height;
    }
line(0,y,width,y);
for(let i=0;i<y.length;i++){
    stroke(color(floor(random(255)),floor(random(255)),floor(random(255))));
    line(0,y[i],width,y[i]);
}
for(let i=0;i<y.length;i++){
    y[i]-=1;
}

}

function mousePressed(){
    redraw()
}
