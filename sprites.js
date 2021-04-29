

let ssh;
let sd;
let animation=[];
let horses=[];
function preload(){
    sd=loadJSON('horse.json')
    ssh=loadImage("horse.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
   let frames=sd.frames;
   for(let i=0;i<frames.length;i++){
       let pos=frames[i].position;
       let img=ssh.get(pos.x,pos.y,pos.w,pos.h);
        animation.push(img);
   }
   console.log(frames)
   for(let i=0;i<5;i++){
       horses[i]=new Sprite(animation,0,i*100,random(0.1,0.3));
   }

}

function draw() {
background(0);
stroke("#fff");
for(let i=0;i<horses.length;i++){
    horses[i].show();
    horses[i].move();
}


}
