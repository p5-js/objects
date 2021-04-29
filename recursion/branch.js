class Branch{
    constructor(begin,end){
    this.begin=begin;
    this.end=end;
    }
     show(){
        stroke(255);
        line(this.begin.x,this.begin.y,this.end.x,this.end.y);
    }
    branchRight(){
        let dir=p5.Vector.sub(this.end,this.begin);
        dir.rotate(PI/4);
        dir.mult(0.67);

        let new_end=p5.Vector.add(this.end,dir);
        let right=new Branch(this.end,new_end);
        return right;
    }
    branchLeft(){
        let dir=p5.Vector.sub(this.end,this.begin);
        dir.rotate(-PI/4);
        dir.mult(0.67);
        let new_end=p5.Vector.add(this.end,dir);
        let left=new Branch(this.end,new_end);
        return left;
    }
}