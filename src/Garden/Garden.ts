export class Garden {
  garden: boolean[][]

  constructor() {
    this.garden = Array(1000)
      .fill(false)
      .map(() => Array(1000).fill(false))
  }

  turnOn(initialCoords: number[], endCoords: number[]): any {
    if (initialCoords[0] > 1000 || initialCoords[1] > 1000 || endCoords[0] > 1000 || endCoords[1] > 1000) {
      throw new Error("Invalid bulb number")
    }

    this.garden = this.garden.map((row, x) => {
      if (x >= initialCoords[0] && x <= endCoords[0]) {
        return row.map((light, y) => {
          if (y >= initialCoords[1] && y <= endCoords[1]) {
            return true
          }
          return light
        })
      }
      return row
    })
  }

  getLightsOn(): number {
    return this.garden.reduce((acc, row) => acc + row.reduce((acc, light) => acc + (light ? 1 : 0), 0), 0)
  }
}
