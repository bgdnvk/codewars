const prereqsPossible = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs)
    const visiting = new Set()
    const visited = new Set()
    console.log(graph)
    for(node in graph) {
      if(checkCycle(graph, node, visiting, visited)) return false
    }
    return true
  };
  
  function checkCycle(graph, node, visiting, visited) {
    if(visited.has(node)) return false
    if(visiting.has(node)) return true
    visiting.add(node) 
    
    for(let neighbor of graph[node]) {
      if(checkCycle(graph, neighbor, visiting, visited)) return true
    }
    
    visiting.delete(node)
    visited.add(node)
    return false
  }
  
  function buildGraph(numCourses, prereqs) {
    const graph = {}
    
    for(let i = 0; i < numCourses; i++) {
      graph[i] = []
    }
    
    for(let req of prereqs) {
      const [a, b] = req
      graph[a].push(b)
    }
    
    return graph
  }
  module.exports = {
    prereqsPossible,
  };