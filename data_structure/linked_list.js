class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    delete(data) {
      if (!this.head) {
        console.log("List is empty, nothing to delete.");
        return;
      }
  
      // If the head node holds the data to delete
      if (this.head.data === data) {
        this.head = this.head.next; // Move the head pointer to the next node
        console.log(`Deleted ${data} from the list.`);
        return;
      }
  
      let current = this.head;
      let previous = null;
  
      // Traverse the list to find the node to delete
      while (current && current.data !== data) {
        previous = current;
        current = current.next;
      }
  
      if (!current) {
        console.log(`${data} not found in the list.`);
        return;
      }
  
      // Update the `next` pointer of the previous node to skip the current node
      previous.next = current.next;
      console.log(`Deleted ${data} from the list.`);
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example Usage
  let list = new LinkedList();
  list.add(10);
  list.add(20);
  list.add(30);
  
  console.log("Original List:");
  list.printList();
  
  console.log("\nDeleting 20:");
  list.delete(10);
  
  console.log("\nUpdated List:");
  list.printList();
  