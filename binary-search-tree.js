// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here 
// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {

        this.root = null;
    }

    insert(val, currentNode = this.root) {
        const node = new TreeNode(val);

        if (!this.root) {
            this.root = node;
            return this;
        }

        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = node;
                return this;
            } else {
                return this.insert(val, currentNode.left);
            }
        }

        if (val > currentNode.val) {
            if (!currentNode.right) {
                currentNode.right = node;
                return this;
            } else {
                return this.insert(val, currentNode.right);
            }
        }
    }

    search(val) {
        let curr = this.root;

        while (curr) {
            if (curr.val === val) return true;
            curr = val < curr.val ? curr.left : curr.right;
        }
        return false;
    }

    preOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }
 
    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        
        this.inOrderTraversal(currentNode.right);
    }
  
    postOrderTraversal(currentNode = this.root) {
        
        if (!currentNode) return;

        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
    }
    
    breadthFirstTraversal() {
      const queue = [];
      if (this.root) {
        queue.push(this.root)
      }
      while (queue.length) {
        const currentNode = queue.shift();
        console.log(currentNode.val)
        
        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
     }

    }
   
    depthFirstTraversal() {
      let stack = []

      if (this.root) {
        stack.push(this.root)
      }
      
      while (stack.length) {
        let currentNode = stack.pop;

        if (currentNode.left) stack.push(currentNode.left)
        if (currentNode.right) stack.push(currentNode.right)
      }
    }
}

module.exports = { BinarySearchTree, TreeNode };
