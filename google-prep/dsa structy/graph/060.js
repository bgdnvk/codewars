const shortestPath = (edges, nodeA, nodeB) => {
    let visited = new Set()
    let graph = adj(edges)
    console.log(graph)
    let res = bfsHelper(graph, nodeA, nodeB, visited)
    return res
  };
  
  const adj = (edges) => {
    let graph = {}
    for(let edge of edges){
      let [a, b] = edge
      if(!(a in graph)) graph[a] = []
      if(!(b in graph)) graph[b] = []
      graph[a].push(b)
      graph[b].push(a)
    }
    return graph
  }
  
const bfsHelper = (graph, node, target, visited) => {
  let queue = [[node, 0]]
  while(queue.length > 0){
    let [curr, distance] = queue.shift() 
    if(curr === target) return distance
    
    
    visited.add(curr)
    for(let neighbor of graph[curr]) {
      if(!visited.has(neighbor)) {
        queue.push([neighbor, distance+1])
      }
    }
  }
  return -1
}
  
  module.exports = {
    shortestPath,
  };