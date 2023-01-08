const countPaths = (grid, r = 0, c = 0, memo={}) => {
    console.log(grid.length)
    console.log(grid[0].length)
    const pos = r + ',' +c
    if(pos in memo) return memo[pos]
    if(r >= grid.length || c >= grid[0].length || grid[r][c] === 'X') return 0
    if(r === grid.length -1 && c === grid[0].length -1) return 1
    const res = countPaths(grid, r+1, c, memo) + countPaths(grid, r, c+1, memo)
    memo[pos] = res
    return memo[pos]
  };
  
  module.exports = {
    countPaths,
  };
  