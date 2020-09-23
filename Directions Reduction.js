//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
function dirReduc(arr){
    // ...
    const n = "NORTH";
    const s = "SOUTH";
    const e = "EAST";
    const w = "WEST";
    
    console.log(arr)
    
    function sameDir(x,y){
      if(x === n && y === s 
      || y === n && x === s
      ){
        return true;
      }
      
      if(x === e && y === w 
      || y === w && x === e
      ){
        return true;
      }
      return false;
    }
    
    for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j<arr.length; j++){
        
        console.log("i is: "+i);
        console.log("i is: "+arr[i]);
        
        console.log("J is "+j);
        console.log("J is "+arr[j]);
        
        if (sameDir(arr[i],arr[j])
           || arr[i]=== arr[j]){
          console.log("deleting: " +arr[j] +" at "+j)
          arr.splice(j, 1);
          console.log(arr)
          
        }
      }
    }
    console.log(arr)
    
    return arr;
  }