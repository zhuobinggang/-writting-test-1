function reverseWord(s){
  const stack = [];
  s.split('').forEach(c => {
    stack.push(c)
  });
  const result = [];
  while(stack.length > 0){
    result.push(stack.pop())
  }
  return result.join('');
}

function reverseSentence(s){
  return s.split(' ').map(item => {
    return reverseWord(item);
  }).join(' ')
}