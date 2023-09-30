class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function getNode(root) {
    if(root == null) {
        return 0
    }

    let leftDepth = getNode(root.left)
    let rightDepth = getNode(root.right) 

    if(leftDepth > rightDepth) {
        return ++leftDepth
    }
    else {
        return ++rightDepth
    }
}

let node = new Node(1)
node.left = new Node(2)
node.right = new Node(3)
node.left.left = new Node(4)
node.left.right = new Node(5)
node.left.left.left = new Node(6)
node.left.left.right = new Node(7)

console.log(getNode(node))