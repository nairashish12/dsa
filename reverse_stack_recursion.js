class Stack {
    constructor() {
        this.items = []
    }

    push(data) {
        this.items.push(data)
    }

    pop() {
        if(!this.isEmpty()) {
            return this.items.pop()
        }
    }

    isEmpty() {
        return this.items.length == 0
    }

    reverse() {
        if(!this.isEmpty()) {
            let popped = this.pop()

            this.reverse()
            this.insertAtBottom(popped)
        }
    }

    insertAtBottom(data) {
        if(this.isEmpty()) {
            this.push(data)
        }
        else {
            let popped = this.pop()
            this.insertAtBottom(data)
            this.push(popped)
        }
    }

    //since this is running in a recursive way an array of [3,2,1] will be popped as 1,2,3 & then pushed
}


let stack = new Stack();
stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)

console.log("Initially Array", stack.items)

stack.reverse()

console.log("Reversed Array", stack.items)