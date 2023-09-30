class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }

    // Function to insert a node as a child of a given parent node
    insert(parentValue, value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
            return;
        }

        const parentNode = this.findNode(this.root, parentValue);

        if (parentNode) {
            // Add the new node as a child of the parent node
            parentNode.children.push(newNode);
        } else {
            console.log(`Parent node with value ${parentValue} not found.`);
        }
    }

    // Helper function to find a node with a specific value in the tree
    findNode(node, value) {
        if (node.value === value) {
            return node;
        }

        for (const child of node.children) {
            const foundNode = this.findNode(child, value);
            if (foundNode) {
                return foundNode;
            }
        }

        return null;
    }
}
