const hasPath = (graph, src, dst) => {
    console.log(src)
    if(src === dst) return true
    
    for(let n of graph[src]){
     if(hasPath(graph, n, dst)) return true
    }
    
    return false
  };
  
  module.exports = {
    hasPath,
  };