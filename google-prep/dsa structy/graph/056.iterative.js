const hasPath = (graph, src, dst) => {
    const stack = [src]
    while(stack.length > 0) {
      let curr = stack.pop()
      
      if(curr === dst) return true
      
      for(let neighbor of graph[curr]){
        stack.push(neighbor)
      }
    }
    return false
  };
  
  module.exports = {
    hasPath,
  };