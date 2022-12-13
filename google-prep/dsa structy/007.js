const compress = (s) => {
    // todo
    if(s.length === 1) return s
   
    let res = []
    let count = 0
    for(let i = 0, j = 0; i <= s.length; i++){
  
      if(s[i] === s[j]){
        count++
      } else {
        if(count === 1){
          res.push(s[j])
        } else {
          res.push(count)  
          res.push(s[j])
        }
        count =1 
        j = i
      }
    }
    console.log(res)
    return res.join('')
  };
  console.log(compress('caaatsss'))
  
  module.exports = {
    compress,
  };
  