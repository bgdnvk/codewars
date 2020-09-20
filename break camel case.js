//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// complete the function
// complete the function

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

// function solution(string) {
//   console.log("phrase is"+string);
  
//   const re = /[A-Z]/g;
  
//   let found = string.match(re);
//   if(found === null){
//     return string;
//   }
//   console.log(found);
//   let newArr = [...string];
//   console.log(`newArr is ${newArr}`);
  
//   let repeated;
//   const foundSorted = found.sort();
//   for(let i = 0; i<foundSorted.length;i++){
//     if(foundSorted[i] === foundSorted[i+1]){
//       repeated = true;
//       console.log("REPEATED");
//     }
//   }


  
//   for(let i = 0; i<found.length; i++){
// //     let indx = string.indexOf(found[i]);
//     let lastIndx;
//     let indx;
//     indx = newArr.indexOf(found[i]);
    
//     //TODO change loop to be in the phrase not the found letters?
    
    
//     newArr.splice(indx, 0, " ");
    
//     lastIndx = indx;
//     console.log(`index we changing is ${indx}
//     iteration is ${i} and lastIndex is ${lastIndx}`);
//   }
  
 
  
//   let returnArr = newArr.join("");
  
//    if(repeated){
     
//      let lastIndx;
//      for (let i = 0; i<newArr.length; i++){
//        if (newArr[i] === " " && newArr[i] === newArr[i+1]){
//          lastIndx = i+1;
//        }
//      }
    
     
// //       let lastIndx = returnArr.lastIndexOf(" ");
     
//      newArr = [...returnArr];
     
     
//      let checkLetter = newArr[lastIndx+1];
//      console.log("check letter is: "+ checkLetter);
     
//      for(let i = lastIndx+2; i<newArr.length; i++){
//        if (newArr[i]===checkLetter){
//          newArr.splice(lastIndx, 1);
//          newArr.splice(i-1, 0, " ");
//        }
//      }
     
//   }
//   returnArr = newArr.join("");
  
//   console.log(newArr);
//   console.log(returnArr);
//   return returnArr;
// //   console.log(string.indexOf(found[0]));
  
  
// }
