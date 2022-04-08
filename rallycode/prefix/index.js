const solve = (strArray) => {
  let testArr = strArray[0]
  let result = []
  
  for(const el of strArray){
    for(let i = 0; i < el.length; i++){
      if(el[i] === testArr[i]){
        result.push(el[i])
        if(result[i+1] === testArr[i+1]){
          result.push(el[i+1])}
      }
    }
  }
  return result.join('');
};


let ans = solve('asdf2', 'asdfzxvc', 'asdfqwer');

console.log('Answer: ', ans)