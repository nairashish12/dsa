class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function flipBinaryTree(root) {
    if(root == null) {
        return root
    }

    if(root.left == null && root.right == null) {
        return root
    }

    let flippedRoot = flipBinaryTree(root.left)

    let tempRoot = root
    let left = root.left
    let right = root.right

    //root = left
    root.left.left = right
    root.left.right = tempRoot
    root.left = null
    root.right = null

    return flippedRoot
}

let root=new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

console.log(flipBinaryTree(root))