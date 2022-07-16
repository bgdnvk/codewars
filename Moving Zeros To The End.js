//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
    console.log(arr)
    
    let countZeros = 0
    for(e of arr){
      if (e===0) countZeros++
    }
    let newArr = arr.filter(e => e!== 0)
    for(let i = 0; i < countZeros; i++){
      newArr.push(0)
    }
    console.log(newArr)
    console.log(countZeros)
    return newArr
  }