let tree=[];
function setup() {
	createCanvas(windowWidth, windowHeight);
    noLoop();
    let begin=createVector(width/2,height)
    let end=createVector(width/2,height-100);
    let root=new Branch(begin,end);
    tree.push(root);
    // for(let i=tree.length-1; i>=0;i--){
    //     tree.push(tree[i].branchRight());
    //     tree.push(tree[i].branchLeft());
    // }
 

}
function mousePressed(){
    for(var i = tree.length-1; i>=0;i--){
     tree.push(tree[i].branchRight()); 
     tree.push(tree[i].branchLeft()); 
    }
  
}

function draw() {
background(0);
stroke(245);
for(let i=0;i<tree.length;i++)
tree[i].show();
}
