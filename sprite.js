class Sprite {
    constructor(animation,x,y,speed){
        this.animation=animation;
        this.speed=speed;
        this.index=0;
        this.len=animation.length;
        this.x=x;
        this.y=y;
    }
    show(){
    let index = floor(this.index) % this.len;
     image(this.animation[index],this.x,this.y);
    }

    move(){
        this.index+=this.speed;
        this.x+=this.speed*25;

    }
}
