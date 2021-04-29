class Graph{
    constructor(v){
        this.V=v;
        this.adj=[];
        this.visited=[]
        this.x=100;
        for(let i=0;i<v;i++){
            this.adj[i]=new LinkedList();
            this.visited[i]=false;
        }
    }
    addEdge(v,w){
        let nodeV;
        let nodeW;
        let margin=40;
        if(this.adj[v].head===null){
            nodeV=new Node(v,random(margin,width-margin),random(margin,height-margin))
            this.adj[v].addLast(nodeV);
        }

        if(this.adj[w].head===null){
            nodeW=new Node(w,random(margin,width-margin),random(margin,height-margin))
            this.adj[w].addLast(nodeW);
        }
        if(this.adj[w].head===null)
        this.adj[v].addLast(new Node(w,random(margin,width-margin),random(margin,height-margin)));
        else
        this.adj[v].addLast(new Node(w,this.adj[w].head.x,this.adj[w].head.y));
        if(this.adj[v].head===null)
        this.adj[w].addLast(new Node(v,random(margin,width-margin),random(margin,height-margin)));
        else
        this.adj[w].addLast(new Node(v,this.adj[v].head.x,this.adj[v].head.y));
      

    }

    // /////////
     async bfsUtil(src){
        let queue = [];
        this.visited[src] = true;
        queue.push(this.adj[src].head);        
        while(queue.length > 0)
        {
            let item = queue.shift();
            console.log(`${item.val},` );
            textSize(20);
            noStroke();
            fill(255);
            text(`${item.val}-->`,this.x,18);
            this.x+=40;
            await this.sleep(1000);
            item.colorify();
           
            let node = this.adj[item.val].head;
            while(node!=null){
                if(!this.visited[node.val]){
                    this.visited[node.val]=true;
                    queue.push(node);
                }
                node=node.next;
            }
        
        }
    }
    async bfs(src){
        this.x=100;
        fill(0);
        noStroke()
        rect(0,0,width,30);
        for(let i=0;i<this.V;i++){
            this.visited[i]=false;
        }
       await this.bfsUtil(src);
    }
    
    // /////////
    async dfsUtil(src){
      
        this.visited[src]=true;
        
        let temp=this.adj[src].head;

       console.log(`${temp.val}->`);
         textSize(20);
           noStroke();
             fill(255);
            text(`${temp.val} -->`,this.x,18);
            this.x+=40;
       await this.sleep(100);
       temp.colorify();

        while(temp!==null){
         if(!this.visited[temp.val]){
         await this.sleep(1000)
         await this.dfsUtil(temp.val);
         }
         temp=temp.next;
     }
     
    
     }
       
    async dfs(src){
        this.x=100;
        fill(0);
        noStroke()
        rect(0,0,width,30);
        for(let i=0;i<this.V;i++){
            this.visited[i]=false;
        }
        this.dfsUtil(src);
    }
    
    // /////////

    display(){
        for(let i=0;i<this.V;i++){
            let head=this.adj[i].head;
            if(head!==null){
            console.log(`edges of the element :${head.val}`);
            head.draw();
            textSize(16)
            // strokeWeight(4);
            // stroke("#666");
            let temp=this.adj[i].head;
            
                temp=temp.next;
               
                while(temp!=null){
                    console.log(temp.val);
                    line(head.x,head.y,temp.x,temp.y);
                    temp.draw();
                    head.draw();
                    temp=temp.next;
                }
                


               
              }
        }
    }
    async sleep(ms){
        return new  Promise(resolve=>setTimeout(resolve,ms));
    }
}