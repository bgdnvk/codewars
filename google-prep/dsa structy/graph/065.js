const semestersRequired = (numCourses, prereqs) => {
    // todo
    let graph = buildGraph(prereqs, numCourses)
    console.log(graph)
    const visited = new Set()
    let max = 0
    
    for(let node in graph) {
      const currMax = dfs(graph, node, visited)
      if(max < currMax) max = currMax
    }
    return max
    
  };
  
  function dfs(graph, node, visited) {
    let distance = 1
    if(visited.has(node)) return 0
    if(graph[node].length === 0) return 0
    
    for(let neighbor of graph[node]) {
      distance += dfs(graph, neighbor, visited)
      visited.add(neighbor)
    }
    return distance
  }
  
  function buildGraph(arr, numCourses) {
    const graph = {}
    for(let i = 0; i < numCourses; i++) {
      graph[i] = []
    }
    for(let courses of arr) {
      const [c1, c2] = courses
      graph[c1].push(c2)
    }
    return graph
  }
  module.exports = {
    semestersRequired,
  };