const Stack = require('./stacks');

class QueueStack {

  constructor() {

    this._frontFacingStack = new Stack();
    this._rearFacingStack  = new Stack();

  }

  enqueue(data) {
    this._frontFacingStack.push(data);
    this._rearFacingStack.push(data);
  }

  dequeue() {
    this._frontFacingStack.pop();
    this._rearFacingStack.pop();

    return this._rearFacingStack.top.data;
  }

  debug() {
    console.log(JSON.stringify({
      front: this._frontFacingStack,
      rear: this._rearFacingStack
    }, null, 2));
  }
}

module.exports = QueueStack;
