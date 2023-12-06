const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if (!rootNode) return null;
  
  while (rootNode.left) {
    rootNode = rootNode.left
  }
  return rootNode.val;
}

function findMaxBST (rootNode) {
  if (!rootNode) return null;

  while (rootNode.right) {
    rootNode = rootNode.right
  }

  return rootNode.val;
}

function findMinBT (rootNode) {
  if (!rootNode) return null;

  let min = rootNode.val;
  const left = findMinBT(rootNode.left);
  const right = findMinBT(rootNode.right);

  if (left !== null && left < min) {
    min = left;
  }
  if (right !== null && right < min) {
    min = right;
  }

  return min;
}

function findMaxBT (rootNode) {
  if (!rootNode) return null;

  let max = rootNode.val;
  const left = findMaxBT(rootNode.left);
  const right = findMaxBT(rootNode.right);

  if (left !== null && left > max) {
    max = left;
  }
  if (right !== null && right > max) {
    max = right;
  }

  return max;
}

function getHeight (rootNode) {
  if (!rootNode) return -1;
  
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  let maxChildHeight;
  if (leftHeight > rightHeight) {
    maxChildHeight = leftHeight
  } else {
    maxChildHeight = rightHeight    
  }
  return maxChildHeight + 1;
}

function balancedTree (rootNode) {
   
}

function countNodes (rootNode) {
  // Your code here 
}

function getParentNode (rootNode, target) {
  // Your code here 
}

function inOrderPredecessor (rootNode, target) {
  // Your code here 
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
