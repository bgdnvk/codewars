const anagrams = (s1, s2) => {
    // todo
    if(s1.length !== s2.length) return false
    let map = {}
  
    for(let i = 0; i < s1.length; i++) {
      if(map[s1[i]]){
        map[s1[i]] += 1
      } else {
        map[s1[i]] =1 
      }    
    }
    
    for(let i = 0; i < s2.length; i++){
      if(!map[s2[i]]){
        return false
      } else {
        map[s2[i]] -= 1
      }
    }
    console.log('second maps:', map)
    for(let key in map){
      if(map[key]!==0){
        return false
      }
    }
    return true
  };
  
  module.exports = {
    anagrams,
  };
  