class ListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      data: value,
      next:null
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(node) {
    let lastNode = this.head;
    node.next = lastNode;
    this.head = node;
    this.length++;
    return this;
  }

  append(node) {
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return this;
  }

  lookup(num) {
    let currentNode = this.head;
    let count = 0;
    while(currentNode.data != num ){
      count++;
      
    } 
  }

  insert(num, pos) {
    let count = 0;
    let currentNode = this.head;
    let newNode = num;

    if(pos === 0 ){
        this.prepend(num);
    }else if(pos === (this.length - 1) || pos >= this.length){
        this.append(num);
    }else{
      while(currentNode){
          if(count === (pos - 1)){
            let nextNode = currentNode.next;
            newNode.next = nextNode;
            currentNode.next = newNode;
            this.length++;
          }

        // console.log(count);
        currentNode = currentNode.next;
        count++;
      }
    }

    return this;
  }

  delete(pos) {
      let count = 0;
      let currentNode = this.head;
      if(pos === 0){
        this.head = this.head.next;
      }else{
        while(currentNode.next != null){
          if(count === (pos - 1)){
            currentNode.next = currentNode.next.next;
            this.length--;
          }
          count++;
          currentNode = currentNode.next;
        }
      }

      return this;
  }

  last() {
    return this.tail;
  }

  print() {
    let arr = [];
    let currentNode = this.head;
    while(currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }
}


let node = new ListNode(10);
let node2 = new ListNode(5);
let node3 = new ListNode(16);

let list = new LinkedList(10);
list.append(node2)
list.append(node3)
list.prepend(new ListNode(20));
list.insert(new ListNode(100),1);
list.insert(new ListNode(200), 50);
list.delete(1);

list.print();

// // list.append(new ListNode(7))
// //lookup --7

// // console.log(list.lookup(16));
// // console.log(list.last());
// console.log(list.head);






