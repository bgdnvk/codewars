//https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/train/javascript
function workOnStrings(a,b){
    let newA = changeB(b,a);
    let newB = changeB(a,b);
    return newA.concat(newB);
  }
  
  const changeB = (a,b) => {
    let tempA = [...a];
    let tempB = [...b];
    console.log(tempA, tempB)
  
    for(let i = 0; i < a.length; i++){
      console.log("i ",tempA[i])
      for(let j = 0; j<b.length; j++){
        console.log("j",tempB[j])
        if(tempA[i].toLowerCase() === tempB[j].toLowerCase()){
          console.log("same")
          let wordB = tempB[j];
          wordB.toLowerCase() === wordB
                  ? tempB[j] = wordB.toUpperCase()
                  : tempB[j] = wordB.toLowerCase()
        }
      }
    }
    return tempB.join("");
  }   