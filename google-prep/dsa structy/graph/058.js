const connectedComponentsCount = (graph) => {
  console.log(graph)
  const visited = new Set()
  let count = 0
  
  for(let node in graph) {
    if(dfs( Number(node), visited, graph)) count += 1
  }
  
  return count
};

const dfs = (node, visited, graph) => {
  console.log('vidited', visited)
  
  if(visited.has(node)) return false
  
  const stack = [node]
  
  while(stack.length > 0){
    let curr = stack.pop() 
    
    visited.add(curr)
    for(let neighbor of graph[curr]){
      if(!visited.has(neighbor)) stack.push(neighbor)
    }
  }
  return true
}


module.exports = {
  connectedComponentsCount,
};