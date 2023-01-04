const shortestPath = (edges, nodeA, nodeB) => {
    let graph = adj(edges)
    console.log(graph)
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
  
  module.exports = {
    shortestPath,
  };
  