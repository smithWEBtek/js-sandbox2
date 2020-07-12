// document.addEventListener("DOMContentLoaded", function(){
  
// });

let array, result, left, right, leftLength, rightLength, leftSum, rightSum;

arrayDiv = document.querySelector('#array');
resultDiv = document.querySelector('#result');
leftDiv = document.querySelector('#left');
rightDiv = document.querySelector('#right');
leftLengthDiv = document.querySelector('#leftLength');
rightLengthDiv = document.querySelector('#rightLength');
leftSumDiv = document.querySelector('#leftSum');
rightSumDiv = document.querySelector('#rightSum');

const solution1 = () => solution([1, 4, 100, 5])    
const solution2 = () => solution([3, 5, 4, 6, -1, 9])    
const solution3 = () => solution([2, 4, 6, 2, 4, 5])    
const solution4 = () => solution([1, 5, 2, 9, 3, 2])    

const loadValues = (a,b,c,d,e,f,g,h) => {
  arrayDiv.innerText += `: ${h}`
  resultDiv.innerText += `: ${a}`
  leftDiv.innerText += `: ${b}`
  rightDiv.innerText += `: ${c}`
  leftLengthDiv.innerText += `: ${d}`
  rightLengthDiv.innerText += `: ${e}`
  leftSumDiv.innerText += `: ${f}`
  rightSumDiv.innerText += `: ${g}`
}

const appendRow = (obj) => {
  const html = (`
    arr: ${obj.arr},
    left: ${obj.left},
    right: ${obj.right},
    leftSum: ${obj.leftSum},
    rightSum: ${obj.rightSum},
    leftLength: ${obj.leftLength},
    rightLength: ${obj.rightLength}
  `)

  document.querySelector('#rows').innerText += html
}

const clearValues = () => {
  arrayDiv.innerText = arrayDiv.innerText.split(':')[0]
  resultDiv.innerText = resultDiv.innerText.split(':')[0]
  leftDiv.innerText = leftDiv.innerText.split(':')[0]
  rightDiv.innerText = rightDiv.innerText.split(':')[0]
  leftLengthDiv.innerText = leftLengthDiv.innerText.split(':')[0]
  rightLengthDiv.innerText = rightLengthDiv.innerText.split(':')[0]
  leftSumDiv.innerText = leftSumDiv.innerText.split(':')[0]
  rightSumDiv.innerText = rightSumDiv.innerText.split(':')[0]
}

const solution = (arr) => {
  clearValues()
  array = arr;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  leftLength = [...arr].slice(0, arr.length / 2).length
  rightLength = [...arr].slice(arr.length / 2, arr.length).length
  
  left = [...arr].slice(0, arr.length / 2)
  right= [...arr].slice(arr.length / 2, arr.length)
  
  leftSum = left.reduce(reducer);
  rightSum = right.reduce(reducer);
  
  console.log('arr: ', arr)
  console.log('left: ', left)
  console.log('right: ', right)    
  console.log('leftSum: ', leftSum) 
  console.log('rightSum: ', rightSum)
  console.log('leftLength: ', leftLength) 
  console.log('rightLength: ', rightLength)
 
  if(arr.length === 0){
    result = 'none';
  } else if (leftLength === rightLength || arr.length === 1){
    result = 'none'; 
  } else if(leftLength > rightLength) {
    result = "Left";
  } else if (rightLength > leftLength) {
    result = "Right";
  }
  // return result
  loadValues(result, left, right, leftLength, rightLength, leftSum, rightSum, arr) 
};
  
const uniqueOccurances = (arr) => {
  let hashed = {};
    for(let i = 0; i < arr.length; i++){
      if(!hashed[arr[i].toString()]){
        hashed[i.toString()] = 1
        console.log('hashed: ', hashed);
      } else {
        debugger;
        hashed[arr[i]] += 1;
      }
    }
  }

uniqueOccurances([1,3,2,3,4])
