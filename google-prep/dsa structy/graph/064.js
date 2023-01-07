const longestPath = (graph) => {
    // todo
    const visited = new Set()
    let max = 0
    for(let node in graph) {
      let res = dfs(graph, node, visited)
      if(res>max) max = res
    }
    return max
  };
  
  function dfs(graph, node, visited) {
    let distance = 1
    if(visited.has(node)) return 0
    visited.add(graph[node])
    if(graph[node].length === 0) return 0
    for(let neighbor of graph[node]) {
      distance += dfs(graph, neighbor, visited)
      visited.add(neighbor)
    }
    console.log('distance', distance)
    return distance
  }
  
  module.exports = {
    longestPath,
  };
  