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

function getSubString(w1: string, w2: string): string {
 
}

function getSubStrings(a1: string[], a2: string[]): string[] {
 //a1 is bigger, a2 it's the substrings
 for(let i = 0; i < a2.length; i++){
   
 }
}

export function inArray(a1: string[], a2: string[]): string[] {
 let w: WordValue = {word: "hi", value:2}
 console.log(w)
 
 let r = addValue(a1);
 console.log(r)
 
 
 return [""]
}