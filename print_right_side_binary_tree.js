class Node
{
    constructor(item) {
    this.left = null;
    this.right = null;
    this.data = item;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);

let maxLevel = 0
rightView(root, 1);

function rightView(node, level) {
    if(node == null) {
        return
    }

    if(maxLevel < level) {
        console.log(node.data)
        maxLevel = level
    }

    rightView(node.right, level+1)
    rightView(node.left, level+1)
}

// Time Complexity: O(N), Traversing the Tree having N nodes
// Auxiliary Space: O(N), Function Call stack space in the worst case.