const uncompress = (s) => {
    // todo
    let res = []
    let nums = []
    for(let i = 0; i < s.length; i++){
      if(s[i] >= '0' && s[i] <= '9'){
        nums.push(s[i])
      } else {
        let num = nums.join('') 
        res.push(s[i].repeat(num))
        nums = [] 
      } 
     }
    console.log(res)
    return res.join("") 
  };
  
  module.exports = {
    uncompress,
  };
  