
const solution = (arr) => {
   let left, right;
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   left = [...arr].slice(0, arr.length / 2).length
   right = [...arr].slice(arr.length / 2, arr.length).length

   if(arr.length === 0){
       return '';
   } else if (left === right){
        return ''; 
    } else if(left > right) {
        return "Left";
    } else if (right > left) {
        return "Right";
    }
};
