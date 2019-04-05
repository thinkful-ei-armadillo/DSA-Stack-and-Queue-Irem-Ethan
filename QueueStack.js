const Stack = require('./stacks');

class QueueStack {

  constructor() {

    this._alpha = new Stack();
    this._bravo  = new Stack();
  }

  enqueue(data) {

    this._alpha.push(data);
  }

  dequeue() {

    // Loop through all but last items in alpha
    while (this._alpha.top !== null) {
      const foo = this._alpha.pop();
      this._bravo.push(foo);
    }

    const output = this._bravo.pop();

    // loop through ALL items in bravo
    while (this._bravo.top !== null) {
      const bar = this._bravo.pop();
      this._alpha.push(bar);
    }

    return output;
  }

  debug() {
    console.log(JSON.stringify({
      alpha: this._alpha,
      bravo: this._bravo,
    }, null, 2));
  }
}

module.exports = QueueStack;
