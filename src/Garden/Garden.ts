import { Point } from "../Point/Point.js"

const SIZE_OF_GARDEN = 1000
export class Garden {
  toggle(arg0: Point, arg1: Point) {
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
    this.validateCoordinates(initialCoords, endCoords)

    this.garden = this.setLights(initialCoords, endCoords, true)
  }

  private setLights(initialCoords: Point, endCoords: Point, value: boolean): boolean[][] {
    return this.garden.map((row, x) => {
      if (x >= initialCoords.getX() && x <= endCoords.getX()) {
        return row.map((light, y) => {
          if (y >= initialCoords.getY() && y <= endCoords.getY()) {
            return value
          }
          return light
        })
      }
      return row
    })
  }

  turnOff(initialCoords: Point, endCoords: Point) {
    this.validateCoordinates(initialCoords, endCoords)
    this.garden = this.setLights(initialCoords, endCoords, false)
  }

  private validateCoordinates(initialCoords: Point, endCoords: Point) {
    if (!this.isOnBounds(initialCoords) || !this.isOnBounds(endCoords)) {
      throw new Error("Invalid bulb number")
    }
  }

  getLightsOn(): number {
    return this.garden.reduce((acc, row) => acc + row.reduce((acc, light) => acc + (light ? 1 : 0), 0), 0)
  }
}
