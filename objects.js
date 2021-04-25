const RADIUS=50;
let bugs=[];
let object=null;
function setup() {
	createCanvas(windowWidth, windowHeight);
    object=new MRect();
    


}

function draw() {
background(0);
stroke("#fff");
fill("#555");
object.display();
object.move();



}
class MRect{
    constructor(){
    this.w=1;
    this.h=600;
    this.x=random(width)
    this.y=random(height)
    }
    display(){
        for(let i=0;i<100;i++)
            rect(this.x+i*(this.w+10+(i/10)),this.y,this.w+(i/10),this.h);
    }
    move(){
        // this.x=mouseX;
        this.y=(height-mouseY);
        this.x=(width-mouseX);
    }
}
