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
    const stack = [node]
    let countVisited = visited.size
    console.log(visited.length)
    let count = 1
    if(visited.has(node)) return 0 
    
    while(stack.length > 0){
      let curr = stack.pop()
      visited.add(curr) 
     // count += 1
      
      for(let neighbor of graph[curr]){
        if(!visited.has(Number(neighbor))){
          
          stack.push(Number(neighbor))
          count += 1
          
          console.log(visited)
          console.log(stack)
          console.log('count', count)
          console.log('neigh', neighbor)
        }
      }
    }
    console.log(visited)
    console.log(count)
    return visited.size - countVisited 
  }
  
  
  module.exports = {
    largestComponent,
  };