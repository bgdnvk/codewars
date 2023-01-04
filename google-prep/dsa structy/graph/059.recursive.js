const largestComponent = (graph) => {
    console.log(graph)
    let largest = 0 
    const visited = new Set()
    
    for(let node in graph) {
      let curr = dfs(graph, Number(node), visited)
      if(curr > largest) largest = curr
    }
    return largest
  };
  
  //return num of elements from an island
  const dfs = (graph, node, visited) => {
    
    if(visited.has(node)) return 0
    visited.add(node)
    
    let size = 1
    for(let n of graph[node]) {
      size += dfs(graph, Number(n), visited)
    }
    return size
  }
  
  
  module.exports = {
    largestComponent,
  };
  