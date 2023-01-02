const undirectedPath = (edges, nodeA, nodeB) => {
    console.log('start')
    const graph = getGraph(edges)
    return hasPath(graph, nodeA, nodeB)
  };
  
  const getGraph = (edges) => {
    console.log('inside getG')
    const graph = {}
    for(let i = 0; i < edges.length; i++){
      let [a, b] = edges[i]
      if(!graph[a]) graph[a] = []
      if(!graph[b]) graph[b] = []
      graph[a].push(b)
      graph[b].push(a)
    }
    console.log(graph)
    return graph
  }
  
  const hasPath = (graph, src, dst) => {
    console.log('inside haspath')
    let visited = new Set()
    let stack = [src]
    while(stack.length > 0){
      let curr = stack.pop()
      if(curr === dst) return true
      if(visited.has(curr)) return false
      visited.add(curr)
      
      console.log(visited)
      console.log(stack)
      console.log(curr)
      console.log(graph[curr])
      for(let n of graph[curr]){
        console.log(n)
        stack.push(n)
      }
    }
    return false
  }
  
  module.exports = {
    undirectedPath,
  };