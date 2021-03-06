'use strict';

const Stack = require('./stacks');
const Queue = require('./queue');
const QueueDLL = require('./queueDLL');
const QueueStack = require('./QueueStack');
const OphidianBankQueue = require('./OphidianBankQueue');

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
// console.log(JSON.stringify(starTrek,null, 2));

function display(data) {
  console.log(JSON.stringify(data,null, 2));
}

function peek(stack){
  return stack.top;
}

function isEmpty(stack){
  return (stack.top !== null) ? false: true;
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let temp = new Stack();
  let reversed ='';
  // Your code goes here
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    temp.push(char);
  }
  for (let i = 0; i < s.length; i++) {
    reversed += temp.pop();
  }

  return (reversed === s) ? true: false;
}

function parentheses(s){
  let stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if(char === '(') stack.push(i);

    if (stack.top !== null) {

      if(char === ')') stack.pop();
    } else {
      if(char === ')') return i;
    }

  }

  if (stack.top === null) {
    return true;
  } else {
    return stack.top.data;
  }
}

function sortStack(stack) {

  let temp = null;
  const sortedStack = new Stack();

  // while stack not empty
  while (stack.top !== null) {

    const current = stack.pop();

    if (sortedStack.top === null || current <= sortedStack.top.data) {
      sortedStack.push(current);
    }
    else if (current > sortedStack.top.data) {

      temp = current;

      while (sortedStack.top !== null) {
        let foo = sortedStack.pop();
        stack.push(foo);
      }

      sortedStack.push(temp);
    }
  }

  return sortedStack;
}

// console.log(peek(starTrek));
// console.log(isEmpty(starTrek));
// console.log(is_palindrome('dad'));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
// console.log(parentheses('()(()'));


const numbers = new Stack();
numbers.push(5);
numbers.push(2);
numbers.push(4);
numbers.push(3);
numbers.push(23);
numbers.push(67);
numbers.push(111);
numbers.push(7);

// display(numbers);
// display(sortStack(numbers));

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

// console.log(starTrekQ.dequeue());
// console.log(starTrekQ.dequeue());

// display(starTrekQ);

function peekQ(queue){
  return queue.first.data;
}

function isEmptyQ(queue){
  return (queue.first.next === null)? true: false;
}

// console.log(peekQ(starTrekQ));
// console.log(isEmptyQ(starTrekQ));

const starTrekQDLL = new QueueDLL();
starTrekQDLL.enqueue('Kirk');
starTrekQDLL.enqueue('Spock');
starTrekQDLL.enqueue('Uhura');
// starTrekQDLL.enqueue('Sulu');
// starTrekQDLL.enqueue('Checkov');
// console.log(starTrekQDLL.dequeue());
// console.log(starTrekQDLL.dequeue());
// console.log(starTrekQDLL.dequeue());
// console.log(starTrekQDLL.dequeue());
// console.log(starTrekQDLL);


// console.log(starTrekQDLL.dequeue());


// const q = new QueueStack();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());

// q.debug();


function squareDance() {

  const male   = new Queue();
  const female = new Queue();

  female.enqueue('Jane');
  male.enqueue('Frank');
  male.enqueue('John');
  male.enqueue('Sherlock');
  female.enqueue('Madonna');
  male.enqueue('David');
  male.enqueue('Christopher');
  female.enqueue('Beyonce');

  while (female.first !== null && male.first !== null) {
    const a = female.dequeue();
    const b = male.dequeue();

    console.log(`${a} ${b}`);
  }

  if (female.first === null && male.first !== null) {

    let maleCount = 0;
    while (male.first !== null) {
      male.dequeue();
      maleCount++;
    }

    console.log(`${maleCount} males waiting`);
  }

  if (female.first !== null && male.first === null) {

    let femaleCount = 0;
    while (female.first !== null) {
      female.dequeue();
      femaleCount++;
    }

    console.log(`${femaleCount} females waiting`);
  }

}

// squareDance();

const bank = new OphidianBankQueue();

bank.enqueue('alpha');
bank.enqueue('bravo');
bank.enqueue('charlie');
bank.enqueue('delta');
bank.enqueue('echo');
bank.enqueue('foxtrot');
bank.enqueue('golf');
bank.enqueue('hotel');


while (bank.first !== null) {

  const cust = bank.first.data;
  const res = bank.dequeue();

  if (res !== false) {
    console.log(`Customer "${cust}" served`);
  } else {
    console.log(`Customer "${cust}" re-queued`);
  }
}
