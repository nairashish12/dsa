class Node {
	constructor(data) {
		this.value = data
		this.next = null
	}
}

let head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

reverse(head)

function reverse(head) {
	let prev = null;
	let current = head;
	let next;

	while(current != null) {
		next = current.next
		current.next = prev
		prev = current
		current = next
	}

	head = prev
	return head
}

// Time Complexity: O(N), Traversing over the linked list of size N. 
// Auxiliary Space: O(1)