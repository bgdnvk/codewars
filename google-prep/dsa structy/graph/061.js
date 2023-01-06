const islandCount = (grid) => {
    const visited = new Set() 
    let count = 0
    
    for(let i = 0; i < grid.length; i++){
      console.log(grid[i])
      for(let j = 0; j < grid[0].length; j++){
  //      console.log(grid[i][j])
        if(dfs(grid, i, j, visited)) count++
      }
    }
    return count
  };
  
  const dfs = (grid, i, j, visited) => {
    
    const rowInbounds = 0 <= i && i < grid.length
    const colInbounds = 0 <= j && j < grid[0].length 
    if(!rowInbounds || !colInbounds) return false
    
    const pos = grid[i][j]
    console.log(pos)
    const coo = i + ',' + j
    console.log(coo)
    
    if(visited.has(coo)) return false
    
    if(pos === 'L' && !visited.has(pos)) {
      visited.add(coo)
      dfs(grid, i, j+1, visited) 
      dfs(grid, i, j-1, visited)
      dfs(grid, i+1, j, visited)
      dfs(grid, i-1, j, visited)
      return true
      
    }
    return false
  }
  
  module.exports = {
    islandCount,
  };