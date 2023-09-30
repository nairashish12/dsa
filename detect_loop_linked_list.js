class Node
{
	constructor(key)
	{
		this.key = key;
		this.next = null;
		this.visited = false
	}
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Create a loop for testing(5 is pointing to 3) /
head.next.next.next.next.next = head.next.next;

let found = detectLoop(head);
if (found)
	console.log("Loop Found");
else
	console.log("No Loop");


function detectLoop(node) {
	while(node != null) {
		if(node.visited) {
			return true
		}

		node.visited = true
		node = node.next
	}

	return false
}

// Time complexity: O(N), Only one traversal of the loop is needed.
// Auxiliary Space: O(1)