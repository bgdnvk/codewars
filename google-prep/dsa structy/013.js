const intersection = (a, b) => {
    // todo
    let res = []
    let setA = new Set(a)
    for(let ele of b){
      if(setA.has(ele)) {
        res.push(ele)
      }
    }
    return res
  };
  
  module.exports = {
    intersection,
  };
  