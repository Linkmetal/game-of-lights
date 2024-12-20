import { Point } from "../Point/Point.js"

const SIZE_OF_GARDEN = 1000
export class Garden {
  turnOff(arg0: Point, arg1: Point) {
    throw new Error("Method not implemented.")
  }
  garden: boolean[][]

  constructor() {
    this.garden = Array(SIZE_OF_GARDEN)
      .fill(false)
      .map(() => Array(SIZE_OF_GARDEN).fill(false))
  }

  private isOnBounds(point: Point): boolean {
    return point.getX() < SIZE_OF_GARDEN || point.getY() < SIZE_OF_GARDEN
  }

  turnOn(initialCoords: Point, endCoords: Point): any {
    if (!this.isOnBounds(initialCoords) || !this.isOnBounds(endCoords)) {
      throw new Error("Invalid bulb number")
    }

    this.garden = this.garden.map((row, x) => {
      if (x >= initialCoords.getX() && x <= endCoords.getX()) {
        return row.map((light, y) => {
          if (y >= initialCoords.getY() && y <= endCoords.getY()) {
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
