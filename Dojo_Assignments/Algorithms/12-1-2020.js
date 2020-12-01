class SLL {
    constructor() {
        this.head = null;
    }

    // return true or false if this.head is null
    isEmpty() {
        if(this.head) {
            return true;
        } else {
            return false;
        }
    }

    // add given node to head, if it exits. return void
    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}

class Node {
    constructor() {
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);
var mySLL = new SLL();