class Node {
    constructor(data) {
        this.data = data,
        this.next = null
    }   
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertNode(node) {
        if(this.head == null) {
            this.head = node
        }
        else {
            let temp = this.head

            while(temp.next != null) {
                temp = temp.next
            }
            temp.next = node
        }
    }
}

function mergeList(list1, list2) {
    let dummy = new Node(0)
    let tail = dummy

    while(true) {
        if(list1 == null) {
            tail.next = list2
            break
        }
        
        if(list2 == null) {
            tail.next = list1
            break
        }

        if(list1.data <= list2.data) {
            tail.next = list1
            list1 = list1.next
        }
        else {
            tail.next = list2
            list2 = list2.next
        }

        tail = tail.next
    }
    console.log(dummy)
    return dummy.next
}

let linkedList1 = new LinkedList()
linkedList1.insertNode(new Node(1))
linkedList1.insertNode(new Node(3))
linkedList1.insertNode(new Node(5))

let linkedList2 = new LinkedList()
linkedList2.insertNode(new Node(2))
linkedList2.insertNode(new Node(4))
linkedList2.insertNode(new Node(6))

console.log(linkedList1, linkedList2)
console.log(mergeList(linkedList1.head, linkedList2.head))

// Time Complexity: O(N + M), where N and M are the size of list1 and list2 respectively
// Auxiliary Space: O(1)