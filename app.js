// Practice with singly linked lists
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // Initialization should be null because I'm starting with no data
        this.size = 0; // This is to keep track of the size of the list
    }
    insertAtHead(data) {
        const newNode = new ListNode(data) // This is the new head to the new list node
        if (!this.head) {
            this.head = newNode; // if the list is empty, nothing else needs to be run
        } else {
            newNode.next = this.head;
            this.head = newNode; // if the list is not empty, the new head needs to point to the old head
        }
        this.size++;
    }
    removeHead() {
        if (this.head === null) {
            return
        } else {
            this.head = this.head.next;
            this.size--
        }
    }
    deleteByValue(value) {
        if(this.head.data === value) {
            return this.removeHead();
        }
        let currentNode = this.head.next;
        let previousNode = this.head
        while(currentNode) {
            if (currentNode.data === value) break
            previousNode = currentNode
            currentNode = currentNode.next
        }
        if (currentNode) {
            previousNode.next = currentNode.next
            this.size--
        }
    }
    find(value) {
        if(this.head.data === value) {
            return this.head
        }
        let currentNode = this.head
        while(currentNode) {
            if (currentNode.data === value) {
                return currentNode
            } else {
                currentNode = currentNode.next
            }
            return null
        }
    }
    insertAfterValue(value,data) {
        const previousNode = this.find(value)
        if(previousNode) {
            const newNode = new ListNode(data)
            newNode.next = previousNode.next
            previousNode.next = newNode
            this.size++
        }
    }
    print() {
        let node = this.head
        let str = `${node.data}`
        while(node.next) {
            str += ` ==> ${node.next.data}`
            node = node.next
        }
        console.log(str)
    }
}

let newList = new SinglyLinkedList();
newList.insertAtHead(1)
newList.insertAtHead(2)
newList.insertAtHead(3)
newList.insertAtHead(4)
newList.insertAtHead(5)
newList.print()
newList.removeHead()
newList.print()
newList.insertAfterValue(4, 6)
newList.print()
newList.deleteByValue(2)
newList.print()

///////The tutorial below is where I'm exploring creating a list node with a function instead of a class///////////////
function createMeANode(value) {
    return {
        value,
        next: null
    }
}

let myFirstNode = createMeANode("Hello World");
console.log(myFirstNode)

class LinkedList2 {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    insert(value) {
        this.length++
        let newNode = createMeANode(value)
        if (this.tail !== null) {
            this.tail.next = newNode
            this.tail = newNode
            return newNode
        }
        this.head = this.tail = newNode
        return newNode
    }
    print() {
        let current = this.head
        while(current) {
            console.log(current.value)
            current = current.next
        }
    }
}

const myOtherLinkedList = new LinkedList2
myOtherLinkedList.insert(5)
// myOtherLinkedList.insert("Hello, my name is Max")
// myOtherLinkedList.insert(false)
myOtherLinkedList.print()