class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function isSameStructure(a, b) {
    if(a == null && b == null) {
        return true
    }

    if(a != null && b != null) {
        return isSameStructure(a.left, b.left) && isSameStructure(a.right, b.right)
    }

    return false
}

let node1 = new Node(1)
node1.left = new Node(2)
node1.right = new Node(3)
node1.left.left = new Node(4)
node1.left.right = new Node(5)
node1.left.left.left = new Node(6)
node1.left.left.right = new Node(7)

let node2 = new Node(1)
node2.left = new Node(2)
node2.right = new Node(3)
node2.left.left = new Node(4)
node2.left.right = new Node(5)
node2.left.left.left = new Node(6)
node2.left.left.right = new Node(7)

if(isSameStructure(node1, node2)) {
    console.log("Same structure")
}
else {
    console.log("Different structure")
}

// Time Complexity: O(N)
// Auxiliary Space: O(N)