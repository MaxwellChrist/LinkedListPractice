const Node = function(value, next = null) {
    this.value = value,
    this.next = next
}

const LinkedList = function() {
    this.head = null;
    this.size = 0;
}

LinkedList.prototype.addNodeAtHead = function(value) {
    this.head = new Node(value, this.head)
    this.size++
    return;
}

const linked_list = new LinkedList()
linked_list.addNodeAtHead(1)
linked_list.addNodeAtHead(5)
console.log(linked_list)