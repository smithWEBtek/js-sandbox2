const solution = (arr) => {
   let left, right, leftSum, rightSum;
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
5
    
6
   left = [...arr].slice(0, arr.length / 2)
7
   right = [...arr].slice(arr.length / 2, arr.length)
8
   console.log('arr: ', arr)
   console.log('left: ', left)
   console.log('right: ', right)    

   leftSum = left.reduce(reducer);
14
   rightSum = right.reduce(reducer);
15
   
   if(arr.length === 0){
20
       return '';
21
   } else if (leftSum === rightSum){
22
        return ''; 
23
    } else if(leftSum > rightSum) {
24
        return "Left";
25
    } else if (rightSum > leftSum) {
26
        return "Right";
27
    }
28
};
 