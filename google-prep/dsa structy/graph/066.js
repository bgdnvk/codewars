const bestBridge = (grid) => {
    console.log(grid)
    let island
    let found = false
    for(let row = 0; row < grid.length; row++) {
      console.log('row', row)
      for(let col = 0; col < grid[0].length; col++) {
        console.log(grid[row][col]) 
        
        if(grid[row][col] === 'L' && !found) {
          island = findIsland(grid, row, col, new Set())
          found = !found
        }
      }
    }
    console.log(island)
    
    const visited = new Set(island)
    const queue = []
    
    for(let pos of island){
      const [row, col] = pos.split(',').map(Number)
      queue.push([row,col, 0])
    }
    
    while(queue.length > 0) {
      const [row, col, distance] = queue.shift()
      
      const pos = row + ',' + col
      if(grid[row][col] === 'L' && !island.has(pos)) return distance - 1
      
      const deltas = [[1,0], [-1, 0], [0, 1], [0, -1]]
      for(let delta of deltas) {
        const [deltaRow, deltaCol] = delta
        const neighborRow = row + deltaRow
        const neighborCol = col + deltaCol
        const neighborPos = neighborRow + ',' + neighborCol
        if(isInbounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
          visited.add(neighborPos)
          queue.push([neighborRow, neighborCol, distance + 1])
        }
        
      }
    }
  };
  
  function isInbounds(grid, row, col) {
    const rowInbounds = row >= 0 && row < grid.length
    const colInbounds = col >= 0 && col < grid[0].length
    return rowInbounds && colInbounds
  }
  
  function findIsland(grid, row, col, visited) {
    const rowInbounds = row >= 0 && row < grid.length
    const colInbounds = col >= 0 && col < grid[0].length  
    
    if(!rowInbounds || !colInbounds || grid[row][col] === 'W') return visited 
    
    const pos = row + ',' + col 
    if(visited.has(pos)) return visited
    
    visited.add(pos)
     
    findIsland(grid, row+1, col, visited)
    findIsland(grid, row-1, col, visited)
    findIsland(grid, row, col+1, visited)
    findIsland(grid, row, col-1, visited)
     
    return visited 
  }
  
  module.exports = {
    bestBridge,
  };
  