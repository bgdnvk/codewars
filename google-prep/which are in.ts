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
 console.log("whole: ", whole)
 console.log("sub: ", sub)
 
 if(whole.length < sub.length){
   return false
 }
 
 let startIndex: number = 0;
 
 for(let i = 0; i < whole.length; i++){
   console.log(whole[i])
//     console.log(sub[i])
   if(whole[i] === sub[0] && i !== whole.length-1 && whole[i+1] === sub[1]){
     startIndex = i;
   }
 }
 console.log("startIndex: ", startIndex)
 
 for(let i = 0, j = startIndex; i < sub.length; i++, j++){
   if(sub[i] !== whole[startIndex]){
     return false
   }
 }
 
 return true
}

function getSubStrings(a1: string[], a2: string[]): string[] {
 //a1 is bigger, a2 it's the substrings
 for(let i = 0; i < a2.length; i++){
   
 }
 return [""]
}

export function inArray(a1: string[], a2: string[]): string[] {
 let w: WordValue = {word: "hi", value:2}
 console.log(w)
 
 let r = addValue(a1);
 console.log(r)
 
 console.log(checkSubString("harp", "arp"))
 
 
 return [""]
}