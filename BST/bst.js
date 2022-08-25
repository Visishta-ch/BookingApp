/*Implementation of bst */

/*creating parent node */
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
    
}
/*creating binary search tree */
class BST{

    constructor(){
        this.root = null; //head node null initially
    }
    /*insertion of elements */
   
    insertion(val){
        var newNode = new TreeNode(val);
        if(this.root === null){
           this.root = newNode;
        }else{
           this.insertNode(this.root, newNode);
        };
     };
     insertNode(node, newNode){
        if(newNode.val < node.val){
           if(node.left === null){
              node.left = newNode;
           }else{
              this.insertNode(node.left, newNode);
           };
        } else {
           if(node.right === null){
              node.right = newNode;
           }else{
              this.insertNode(node.right,newNode);
           };
        };
     };


     search(val) {
        let currNode = this.root;
        while (currNode !== null) {
           if (currNode.val === val) {
              // Found the element!
              return true;
           } else if (val < currNode.val) {
              // search Left as data is smaller than parent
              currNode = currNode.left;
           } else {
              // search right as data is greater than parent
              currNode = currNode.right;
           }
        }
        return false;
 
      }


}

const bst = new BST();
bst.insertion(13);
bst.insertion(16);
bst.insertion(7);
bst.insertion(14);
bst.insertion(18);
bst.insertion(12);
bst.insertion(5);
bst.insertion(20);
console.log(bst);
console.log(bst.search(17));
console.log(bst.search(18))