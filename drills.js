const BinarySearchTree = require('./BST');

// 4. What does this program do?
// Without running this code in your code editor, explain what the following program does.
// Show with an example the result of executing this program. What is the runtime of this algorithm?
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
// Finds the sum of the tree
const BST = new BinarySearchTree();
BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
BST.insert(7, 7);
console.log(tree(BST)); 

// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?
function getHeight(tree) {
    if (tree === null) {
      return 0;
    }
  
    let lHeight = getHeight(tree.left);
    let rHeight = getHeight(tree.right);
  
    if (lHeight > rHeight) {
      return (lHeight + 1);
    } else {
      return rHeight + 1;
    };
    ;
}

const BST = new BinarySearchTree();
BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
console.log(getHeight(BST)); // 4

// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.
function thirdLargest(node, counter = 1){
    if(!node) return console.log('No Tree');
    if(counter === 3) return node.value;
    return thirdLargest(node.right, counter +1) || thirdLargest(node.left, counter +1)
}

const BST = new BinarySearchTree();
BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
console.log(thirdLargest(BST));

// 8. Balanced BST
// Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).  
function balanced(node){
    return bst_height(node) - _shortest(node) <= 1
}

function main(){
    let test = new BST;
    test.insert(3, 3);
    test.insert(1, 1);
    test.insert(4, 4);
    test.insert(6, 6);
    test.insert(9, 9);
    test.insert(2, 2);
    test.insert(5, 5);
    test.insert(7, 7);
    console.log(balanced(test))
}
main();