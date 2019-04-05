'use strict';

const Stack = require('./stacks');

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
// console.log(JSON.stringify(starTrek,null, 2));

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

function parantheses(s){
  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if(char === '(') stack.push('(');
    if(char === ')') stack.pop();
  }

  return (stack.top === null) ? 'all balanced' : 'need to work a bit harder';

}

// console.log(peek(starTrek));
// console.log(isEmpty(starTrek));
// console.log(is_palindrome('dad'));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
console.log(parantheses('()()()()()()()()'));