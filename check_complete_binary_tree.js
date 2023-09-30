class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function checkCompleteBinaryTree(root) {
    if(root == null) {
        return false
    }

    let queue = []
    let isNotFullNode = false
    queue.push(root)

    while(queue.length > 0) {
        let currentNode = queue.shift()

        if(currentNode == null) {
            isNotFullNode = true
        }
        else {
            if(isNotFullNode == true) {
                return false
            } 

            queue.push(currentNode.left)
            queue.push(currentNode.right)
        }
    }

    return true
}

let tree = new Node(1)
tree.left = new Node(2)
tree.right = new Node(3)

if(checkCompleteBinaryTree(tree)) {
    console.log("Its a complete binary tree")
}
else {
    console.log("Its not a complete binary tree");
}