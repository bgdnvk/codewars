const hasCycle = (graph) => {
    const visited = new Set()
    for(let node in graph) {
      if(checkCycle(node, graph, visited, new Set())) return true
    }
    return false
  };
  
  
  function checkCycle(node, graph, visited, visiting) {
    if(visited.has(node)) return false
    if(visiting.has(node)) return true
    visiting.add(node) 
    
    for(let neighbor of graph[node]){
      if(checkCycle(neighbor, graph, visited, visiting)) return true
    }
    
    visiting.delete(node)
    visited.add(node)
    return false
  }
  
  module.exports = {
    hasCycle,
  };
  