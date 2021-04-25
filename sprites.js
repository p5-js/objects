let ssh;
let sd;
let animation=[];
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
   frameRate(100);

}

function draw() {
background(0);
stroke("#fff");
image(animation[animation.length-1],100,100);



}
