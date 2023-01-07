const minimumIsland = (grid) => {
    // todo
    console.log(grid)
    let min = Infinity
    let visited = new Set()
    
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++) {
        let minDfs = dfs(grid, i, j, visited)
        console.log(minDfs)
        if(minDfs > 0 && minDfs < min) min = minDfs
      }
    }
    return min 
  };
  
  function dfs(grid, i, j, visited) {
    rowInbounds = i >= 0  && i < grid.length
    colInbounds = j >= 0 && j < grid[0].length
    
    if(!rowInbounds || !colInbounds) return 0
    
    const pos = grid[i][j]
    if(pos === 'W') return 0
    console.log(pos)
    const coord = i + ','+ j
    if(visited.has(coord)) return 0
    visited.add(coord)
    
    let size = 1
    console.log(pos) 
    size += dfs(grid, i+1, j, visited)
    size += dfs(grid, i-1, j, visited)
    size += dfs(grid, i, j+1, visited)
    size += dfs(grid, i, j-1, visited)
    
    console.log(size)
    return size
  }
  
  
  module.exports = {
    minimumIsland,
  };