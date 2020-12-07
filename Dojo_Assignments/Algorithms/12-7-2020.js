// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false
// length - return size of stack



class arrStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }

    length(){
        return this.items.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    // remove from top
    pop() {
        var tempNode = null;
        if (this.isEmpty()) {
            console.log("There's nothing in here")
            return null;
        }
        tempNode = this.top;
        this.top = this.top.next;
        tempNode.next = null;
        this.length--;
        console.log("Top Node was removed.");
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // length getter
    lengthY() {
        return this.length;
    }
}

let stack = new slStack();
stack.push(new Node(1));
stack.push(new Node(2));
stack.push(new Node(3));
console.log(stack.peek());
console.log("Length is: ", stack.lengthY());
stack.pop();
console.log(stack.peek());
console.log("Length is: ", stack.lengthY());



// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stacky) {
    let newStack = new slStack();
    let count = 0;

    while (!stacky.isEmpty()) {
        let node = stacky.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stacky.push(newStack.pop());
    }

    return count;
}

