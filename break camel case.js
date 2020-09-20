//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// complete the function
// complete the function
function solution(string) {
    console.log("phrase is"+string);
    
    const re = /[A-Z]/g;
    
    let found = string.match(re);
    if(found === null){
      return string;
    }
    console.log(found);
    let newArr = [...string];
    console.log(`newArr is ${newArr}`);
    
    let repeated;
    for(let i = 0; i<found.length;i++){
      if(found[i] === found[i+1]){
        repeated = true;
        console.log("REPEATED");
      }
    }
    
    for(let i = 0; i<found.length; i++){
  //     let indx = string.indexOf(found[i]);
      let lastIndx;
      let indx;
      indx = newArr.indexOf(found[i]);
      
      //TODO change loop to be in the phrase not the found letters?
      
      
      newArr.splice(indx, 0, " ");
      
      lastIndx = indx;
      console.log(`index we changing is ${indx}
      iteration is ${i} and lastIndex is ${lastIndx}`);
    }
    
   
    
    let returnArr = newArr.join("");
    
     if(repeated){
      let lastIndx = returnArr.lastIndexOf(" ");
       console.log("last indx is: "+lastIndx);
       newArr = [...returnArr];
       
    }
    
    console.log(newArr);
    console.log(returnArr);
    return returnArr;
  //   console.log(string.indexOf(found[0]));
    
    
  }
  
  