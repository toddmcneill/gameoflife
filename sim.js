function nextStep(previousGrid) {
  const newGrid = [...previousGrid].map(line => [...line])
  for (let i = 0; i < previousGrid[0].length; i++) {
    for (let j = 0; j < previousGrid.length; j++) {
      const livingNeighbors = countLivingNeighbors(previousGrid, i, j)
      newGrid[j][i] = shouldLive(isAlive(previousGrid[j][i]), livingNeighbors) ? '*' : '.'
    }
  }
  return newGrid
}

function shouldLive(startsAlive, livingNeighbors) {
  if (startsAlive) {
    return (livingNeighbors === 2 || livingNeighbors === 3)
  }
  return (livingNeighbors === 3)
}

function countLivingNeighbors(grid, x, y) {
  let livingNeighbors = 0
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      // skip self
      if (i === x && j === y) {
        continue
      }
      // skip outside grid
      if (!isInGrid(grid, i, j)) {
        continue
      }
      if (isAlive(grid[j][i])) {
        livingNeighbors++
      }
    }
  }
  return livingNeighbors
}

function isAlive(cell) {
  return cell === '*'
}

function isInGrid(grid, x, y) {
  if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) {
    return false
  }
  return true
}

module.exports = {
  nextStep,
  shouldLive,
  countLivingNeighbors,
  isInGrid
}
