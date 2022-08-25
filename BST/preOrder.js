class RNode{
    constructor(val){
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

console.log("Pre order travseral in Recursive method");

var root = null;

function RpreOrderTraversal(node){
    if(node != null){
        console.log(node.key);
        RpreOrderTraversal(node.left);
        RpreOrderTraversal(node.right);
    }
}

root = new RNode(1);
root.left = new RNode(2);
root.right = new RNode(3);
root.left.left = new RNode(4);
root.right.left = new RNode(5);
root.right.right = new RNode(6);
root.right.left.left = new RNode(7);
root.right.left.right = new RNode(8);

RpreOrderTraversal(root);

class Node{
    constructor(val){
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
var root1 = null;



function IpreOrderTraversal(node){
    if(node == null){
        return;
    }
    var stack = [];
    stack.push(root1);
    console.log("Pre order travseral in iterative method");
    while(stack.length > 0){
        var element = stack[stack.length - 1];

        console.log(element.key);

        stack.pop();

        if(element.right != null){
            stack.push(element.right);
        }
        if(element.left != null){
            stack.push(element.left)
        }
    }
}

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.right.left = new Node(5);
root1.right.right = new Node(6);
root1.right.left.left = new Node(7);
root1.right.left.right = new Node(8);

IpreOrderTraversal(root1)