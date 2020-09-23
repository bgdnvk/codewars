//https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
function reverse(str){
    //WRITE SOME MAGIC
  
    let arrStr = str.split(" ");
    
    for(let i = 1; i<arrStr.length;i=i+2){
      console.log(arrStr[i])
      arrStr[i] = arrStr[i].split("").reverse().join("");
    }
    if(arrStr[0] === ""){
      return "";
    }
    return arrStr.join(" ")
  }