function fizzBuzz(num){
  const result = []
  for(let i = 1; i<=num; i++){
    if(i % 3 == 0 && i % 5 == 0){
      result.push(i);
    }else if(i % 3 == 0 || i % 5 == 0){
      //Do nothing
    }else{
      result.push(i)
    }
  }
  return result;
}