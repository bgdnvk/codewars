const mostFrequentChar = (s) => {
    // todo
    let map = {}
    
    for(let i = 0; i < s.length; i++){
      if(!map[s[i]]){
        map[s[i]] = 1
      } else {
        map[s[i]] += 1
      }
    }
    console.log(map)
    let max = null 
    for(let i = 0; i<s.length; i++){
     if(max === null || map[s[i]] > map[max]) {
       max = s[i]
     }
    }
    return max
  };
  
  module.exports = {
    mostFrequentChar,
  };