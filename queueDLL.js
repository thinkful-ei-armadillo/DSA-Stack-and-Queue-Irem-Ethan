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

    const node = new _Node(data, null, null);

    if (this.first  === null){
      this.first = node;
    }

    if(this.last){
      this.last.next= node;
      node.prev = this.last;
    }

    this.last= node;
  }

  dequeue(){

    if(this.first === null) {
      return null;
    }

    const node = this.first;
    this.first = this.first.next;

    if (this.first) {
      this.first.prev = null;
    }

    return node.data;

    // if(this.first === null) {
    //   return null;
    // }

    // let node = this.first;
    // if(node.next !== null){
    //   this.first = node.next;
    //   this.first.prev = null;
    // }

    // return node.data;
  }

}

module.exports = QueueDLL;
