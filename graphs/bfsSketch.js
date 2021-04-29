let graph;
let choice;
let value;
let nodeValue;
let vertex;
let vertex1;
function setup() {
	createCanvas(windowWidth*0.85, windowHeight);
    noLoop();
    graph=new Graph(10);
    graph.addEdge(0,1);
    graph.addEdge(0,2);
    graph.addEdge(1,2);
    graph.addEdge(1,3);
    graph.display();
    let div = createDiv(`<form id="form">
<input id="input"></input>
<button id="bfs">bredth first search</button>
<button id="dfs">depth first search</button>
</form>`);
 
    div.position(width, 10);
    let form=document.querySelector("#form");
    let buttonBFS=form.querySelector("#bfs");
    let buttonDFS=form.querySelector("#dfs");
    let input=form.querySelector("#input");
    input.addEventListener("change",updateValue);
    buttonBFS.addEventListener("click",update);
    buttonDFS.addEventListener("click",update);
    form.addEventListener("submit",submitHandler);
     
    // /////

    let div1 = createDiv(`<form id="form1">
    <input id="input1"></input>
    <button id="add">Add Node</button>
    </form>`);
      
        div1.position(width, 200);
        let form1=document.querySelector("#form1");
        let add=form1.querySelector("#add");
        let input1=form1.querySelector("#input1");
        input1.addEventListener("change",updateNodeValue);
        // add.addEventListener("click",addNode);
        form1.addEventListener("submit",addNode);
         
    // ////
    let div2 = createDiv(`<form id="form2">
    <input id="vertex1" class="vertex"></input>
    <input id="vertex2" class="vertex"></input>
    <button id="addEdge">Add Edge</button>
    </form>`);
        
        div2.position(width, 400);
        let form2=document.querySelector("#form2");
        let addEdgeBtn=form2.querySelector("button");
        let input2=form2.querySelector("#vertex1");
        let input3=form2.querySelector("#vertex2");
        input3.addEventListener("change",updateVertex1);
        input2.addEventListener("change",updateVertex);
        console.log(input3);
        console.log(input2);
        // addEdgeBtn.addEventListener("click",update);
        form2.addEventListener("submit",addNodeEdge);
         
        // /////
    // /////

 
    
    
    
}

function draw() {
background(0);
stroke("#fff");
fill(255)

graph.display();


}

function submitHandler(e){
    e.preventDefault();
    console.log(choice);
    if(choice === "bfs"){
        if(value!==""){
        graph.display();
    graph.bfs(value);
        }
    }
    else{
        if(value!==""){
            graph.display();
        graph.dfs(value);
            }

    }
}

function update(e){
    choice=e.target.id;
}

function updateValue(e){
    value=e.target.value;
}
function addNode(e){
    e.preventDefault();
graph.adj[nodeValue].head=new Node(nodeValue,random(50,width-50),random(50,height-50));
graph.adj[nodeValue].head.draw();
console.log(nodeValue)
}

function updateNodeValue(e){
    nodeValue=e.target.value;
}


function updateVertex(e){
    vertex=e.target.value;
}
function updateVertex1(e){
    vertex1=e.target.value;
}
function addNodeEdge(e){
    e.preventDefault();
    graph.addEdge(vertex,vertex1);
    line(graph.adj[vertex].head.x,graph.adj[vertex].head.y,graph.adj[vertex1].head.x,graph.adj[vertex1].head.y);
    console.log("vertex:",vertex,"vertex1:",vertex1);
    graph.adj[vertex].head.draw()
    graph.adj[vertex1].head.draw()
}
