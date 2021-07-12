const { nextStep, shouldLive, countLivingNeighbors, isInGrid } = require('./sim')

describe('sim', () => {
  const grid = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '*', '.', '.', '.'],
    ['.', '.', '.', '*', '*', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ]

  describe('nextStep', () => {
    it('calculates the next generation', () => {
      const expected = [
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '*', '*', '.', '.', '.'],
        ['.', '.', '.', '*', '*', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.']
      ]
      
      const gen2 = nextStep(grid)

      expect(gen2).toEqual(expected)
    })

  })

  describe('shouldLive', () => {
    it('dies if alive and less than 2 live neighbors', () => {
      const willLive = shouldLive(true, 1)
      expect(willLive).toBe(false)
    })

    it('dies if alive and more than 3 neighbors', () => {
      const willLive = shouldLive(true, 4)
      expect(willLive).toBe(false)
    })

    it('lives if alive and has 2 live neighbors', () => {
      const willLive = shouldLive(true, 2)
      expect(willLive).toBe(true)
    })

    it('lives if alive and has 3 live neighbors', () => {
      const willLive = shouldLive(true, 3)
      expect(willLive).toBe(true)
    })

    it('lives if dead and has exactly 3 neighbors', () => {
      const willLive = shouldLive(false, 3)
      expect(willLive).toBe(true)
    })

    it('stays dead if dead and has less than 3 neighbors', () => {
      const willLive = shouldLive(false, 2)
      expect(willLive).toBe(false)
    })

    it('stays dead if dead and has more than 3 neighbors', () => {
      const willLive = shouldLive(false, 4)
      expect(willLive).toBe(false)
    })
  })

  describe('countLivingNeighbors', () => {
    it('counts the living neighbors', () => {
      const liveNeighbors = countLivingNeighbors(grid, 3, 1)
      expect(liveNeighbors).toEqual(3)
    })

    it('counts the living neighbors on the edge', () => {
      const liveNeighbors = countLivingNeighbors(grid, 4, 0)
      expect(liveNeighbors).toEqual(1)
    })

    it('counts the living neighbors on the edge', () => {
      const liveNeighbors = countLivingNeighbors(grid, 4, 3)
      expect(liveNeighbors).toEqual(2)
    })

    it('counts the living neighbors on the edge', () => {
      const liveNeighbors = countLivingNeighbors(grid, 5, 2)
      expect(liveNeighbors).toEqual(2)
    })
  })

  describe('isInGrid', () => {
    it('is in the grid', () => {
      const inGrid = isInGrid(grid, 4, 2)
      expect(inGrid).toBe(true)
    })

    it('is outside the grid', () => {
      const inGrid = isInGrid(grid, 10, 10)
      expect(inGrid).toBe(false)
    })

    it('is inside the grid on an edge', () => {
      const inGrid = isInGrid(grid, 7, 0)
      expect(inGrid).toBe(true)
    })
    
    it('is outside the grid on an edge', () => {
      const inGrid = isInGrid(grid, 8, 0)
      expect(inGrid).toBe(false)
    })

    it('is on a corner inside the grid', () => {
      const inGrid = isInGrid(grid, 7, 0)
      expect(inGrid).toBe(true)
    })
  })
})
