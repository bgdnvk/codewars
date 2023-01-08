const knightAttack = (n, kr, kc, pr, pc) => {
    const visited = new Set();
    visited.add(kr + ',' + kc);
    const queue = [ [kr, kc, 0] ];
    while (queue.length > 0) {
      const [r, c, step] = queue.shift(); 
      if (r === pr && c === pc) {
        return step;
      }
      const neighbors = getKnightMoves(n, r, c);
      for (let neighbor of neighbors) {
        const [neighborRow, neighborCol] = neighbor;
        const neighborKey = neighborRow + ',' + neighborCol;
        if (!visited.has(neighborKey)) {
          visited.add(neighborKey);
          queue.push([neighborRow, neighborCol, step + 1]);
        }
      }
    }
    return null;
  };
  
  const getKnightMoves = (n, r, c) => {
    const positions = [
      [ r + 2, c + 1 ],
      [ r - 2, c + 1 ],
      [ r + 2, c - 1 ],
      [ r - 2, c - 1 ],
      [ r + 1, c + 2 ],
      [ r - 1, c + 2 ],
      [ r + 1, c - 2 ],
      [ r - 1, c - 2 ],
    ];
    
    const inboundsPositions = [];
    for (let pos of positions) {
      const [newRow, newCol] = pos;
      if (0 <= newRow && newRow < n && 0 <= newCol && newCol < n) {
        inboundsPositions.push(pos);
      }
    }
    
    return inboundsPositions;
  };