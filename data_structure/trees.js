class TreesNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    } 
}
let root= new TreesNode(10);
root.left = new TreesNode(20);
root.right = new TreesNode(30);
console.log(root.left.data);
