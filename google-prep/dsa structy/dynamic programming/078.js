const maxPathSum = (grid, r = 0, c = 0, memo={}) => {
    const pos = r+','+c
    if(pos in memo) return memo[pos]
    if(r === grid.length || c === grid[0].length) return -Infinity
    if(r === grid.length -1 && c === grid[0].length-1) return grid[r][c]
    
    const down = maxPathSum(grid, r+1, c, memo)
    const right = maxPathSum(grid, r, c+1, memo)
    
    memo[pos] = grid[r][c]+Math.max(down,right)
    return memo[pos]
  };
  
  module.exports = {
    maxPathSum,
  };
  