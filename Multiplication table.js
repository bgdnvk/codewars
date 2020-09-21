//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
multiplicationTable = function(size) {
    // insert code here
    let fullArr = [];
    let tempArr = [];
    
    for(let i = 1; i<=size; i++){
      for(j = 1; j<=size; j++){
        tempArr.push(i*j);
      }
      fullArr.push(tempArr);
      tempArr = [];
    }
    
    return fullArr;
  }
  
  