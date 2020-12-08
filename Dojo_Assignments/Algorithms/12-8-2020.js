// Queue
// FIFO (First in, first out)


class Queue {
    constructor() {
        this.front = null; // "front of the line"
        this.rear = null; // "back of the line"
        this.length = 0;
    }

    // what if the queue is empty?
    // what if it's the last node in the queue?

    // add to the rear
    enqueue(node) {
        if(this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.length++;
    }

    // remove from the front
    dequeue() {
        if(this.isEmpty()) {
            return "It's empty";
        }
        if(this.length == 1) {
            var temp1 = this.front;
            this.front = null;
            this.rear = null;
            return temp1;
        }
        var temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    // check the front of the queue
    checkFront() {
        return this.front ? this.front.data : null;
    }

    // return if empty
    isEmpty() {
        if(this.front == null && this.rear == null) {
            return true;
        }
        return false;
    }

    // return length
    lengthY() {
        return this.length;
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
function readQueue(queue) {
    let length = queue.lengthY();

    while (length > 0) {
        let node = queue.dequeue();
        console.log(node.data);
        queue.enqueue(node);
        length--;
    }

    return null;
}


// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// first in, first out

class arrStack {
    constructor() {
        this.items = [];
    }

    enQueue(item) {
        this.items.enQueue(item);
    }

    deQueue() {
        return this.items.deQueue();
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
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    enQueue(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    deQueue() {
        if (this.top === null) return null;

        const removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;

        return removed;
    }

    // aka check top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

    length() {
        return this.length;
    }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods enQueue deQueue peek isempty
function countStack(stack) {
    let newQueue = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.deQueue();
        newQueue.enQueue(node);
        count++;
    }

    while (!newQueue.isEmpty()) {
        stack.enQueue(newQueue.deQueue());
    }

    return count;
}

var stuff = new Queue();
stuff.enqueue(new Node(54));
stuff.enqueue(new Node(46));
stuff.enqueue(new Node(32));
stuff.enqueue(new Node(23));
console.log("This is the front of the queue: ", stuff.checkFront());
console.log("This is the length: " + stuff.lengthY());
console.log("This is the removed item: ", stuff.dequeue());
console.log("This is the length: " + stuff.lengthY());
readQueue(stuff);