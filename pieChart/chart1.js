let angles=[90,90,45,45,45,45];
function setup() {
	createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
background(0);
stroke("#fff");
drawPieChart(100,angles);

}

function drawPieChart(radius,angles){
    let lastAngle=0;
    noStroke();
    for(let i=0;i<angles.length;i++){
     fill(126+(i*30));
     arc(width/2,height/2,radius*2,radius*2,lastAngle,lastAngle + radians(angles[i]));
    
     lastAngle+=radians(angles[i]);
    }
}
