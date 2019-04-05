'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class OphidianBankQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  _paperWorkIsWrong() {

    const min = 1;
    const max = 4;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    if (num === max) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(data){

    const node = new _Node(data, null);

    if (this.first  === null){
      this.first = node;
    }

    if(this.last){
      this.last.next= node;
    }
    this.last= node;
  }

  dequeue(){

    if(this.first  === null) {
      return null;
    }

    const node = this.first;
    this.first = this.first.next;

    if (this._paperWorkIsWrong()) {
      this.enqueue(node.data);
      return false;
    } else {
      return node.data;
    }
  }

}

module.exports = OphidianBankQueue;
