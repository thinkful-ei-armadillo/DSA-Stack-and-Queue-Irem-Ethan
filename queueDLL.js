'use strict';

class _Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev; 
    this.next = next;
  }
}

class QueueDLL {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data){

    if(this.first === null || this.last === null){
      const node = new _Node(data, null, null);
      this.first = node;
      this.last = node;
    }

    const node = new _Node(data, this.last, null);
    this.last.next = node;

  }

  dequeue(){

    if(this.first === null) {
      return null;
    }

    let node = this.first;
    if(node.next !== null){
      this.first = node.next;
      this.first.prev = null;
    }
    
    return node.data;
  }

}

module.exports = QueueDLL;
