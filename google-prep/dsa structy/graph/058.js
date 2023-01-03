const connectedComponentsCount = (graph) => {
    console.log(graph)
    const stack = []
    const set = new Set()
    let count = 0
    
    for(let i in graph){
      stack.push(Number(i))
      if(!set.has(Number(i))) count += 1
      while(stack.length > 0) {
        let curr = stack.pop()
        set.add(curr)
        console.log(set)
        console.log(curr)
        for(let neighbor of graph[i]) {
          console.log('neighbor', neighbor)
          if(!set.has(neighbor)){
            stack.push(neighbor)
          }
        }
        console.log('stack', stack)
      }
    }
    return count
  };
  
  
  module.exports = {
    connectedComponentsCount,
  };
  