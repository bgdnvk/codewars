//https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript
type WordValue = {
  word: string;
  value: number;  
} 

function addValue(arr: string[]): WordValue[] {
 let resArr: WordValue[] = [];  
 
 for(let i = 0; i < arr.length; i++){
   let count = 0;
   for(let j = 0; j < arr[i].length; j++){
//       console.log(arr[i].charCodeAt(j));  
     count+=arr[i].charCodeAt(j);
   }
   let newWordValue = {word: arr[i], value: count}
//     console.log(newWordValue)
   resArr.push(newWordValue)
 }
//   return [{word: "", value: 0}];
 return resArr;
}

function checkSubString(whole: string, sub: string): boolean {
//   console.log("whole: ", whole)
//   console.log("sub: ", sub)
 
 if(whole.length < sub.length){
   return false
 }
 
 let startIndex: number = 0;
 
 for(let i = 0; i < whole.length; i++){
//     console.log(whole[i])
   if(whole[i] === sub[0] && i !== whole.length-1 && whole[i+1] === sub[1]){
     startIndex = i;
   }
 }
//   console.log("startIndex: ", startIndex)
 
 for(let i = 0, j = startIndex; i < sub.length; i++, j++){
//     console.log(sub[i])
//     console.log(whole[j])
   if(sub[i] !== whole[j]){
     return false
   }
 }
 
 return true
}

function getSubStrings(a1: string[], a2: string[]): string[] {
 //a2 is bigger, a1 is where the substrings are
 let subStrings: string[] = [];
 
 //arr counter to count how many times an element from a1 appears
 let subCounter: number[] = new Array(a1.length).fill(0);
 
 for(let i = 0; i < a2.length; i++){
   for(let j = 0; j < a1.length; j++){
     //check if there's a substring
     if(checkSubString(a2[i], a1[j])) {
       subCounter[j] += 1
       }
   }
 }
 
 //insert the non dupe elements into the array to return
 //the length is the same as a1
 for(let i = 0; i < subCounter.length; i++){
   if (subCounter[i] >= 1){
     subStrings.push(a1[i])
   }
 }
 
 console.log(subCounter)
 console.log("unordened subS: ", subStrings);
 return subStrings;
}

//implementing bubble sort
function orderByValue(arr: WordValue[]): string[] {
//   console.log(arr.length)
 
 let orderedArr: string[] = [];
 
 //bubble sort
 for(let i = 0; i < arr.length - 1; i++){
   console.log(arr[i].word)
//     console.log(arr[i].value)
   for(let j = 0; j < arr.length - 1 - i; j++){
     console.log("inside bubble sort", arr[j])
     if(arr[j].value > arr[j+1].value ){
       let temp = arr[j+1]
       arr[j+1] = arr[j]
       arr[j] = temp
     }
   }
   
 }
 console.log("ordered arr with values", arr)
 
 //fill the arr with the values in order
 for(let i = 0; i < arr.length; i++){
   orderedArr.push(arr[i].word)
 }
 
 return orderedArr
}



export function inArray(a1: string[], a2: string[]): string[] {
//   let w: WordValue = {word: "hi", value:2}
//   console.log(w)
 
//   let r = addValue(a1);
//   console.log(r)
 
//   console.log(checkSubString("armstrong", "strong"))
 
 const unordenedSubStrings = getSubStrings(a1, a2)
 //could just: return unordenedSubStrings.sort()
//   const unordenedWithValue = addValue(unordenedSubStrings)
//   console.log("unordened w value: ", unordenedWithValue)
//   const res: string[] = orderByValue(unordenedWithValue)
 
//   return res
 return unordenedSubStrings.sort()
}