import { Point } from "../Point/Point.js"

const SIZE_OF_GARDEN = 1000
export class Garden {
  garden: number[][]

  constructor() {
    this.garden = Array(SIZE_OF_GARDEN)
      .fill(false)
      .map(() => Array(SIZE_OF_GARDEN).fill(0))
  }

  public turnOn(initialCoords: Point, endCoords: Point): any {
    this.garden = this.setLights(initialCoords, endCoords, (value) => value + 1)
  }

  public turnOff(initialCoords: Point, endCoords: Point) {
    this.garden = this.setLights(initialCoords, endCoords, (value) => value - 1)
  }

  public toggle(initialCoords: Point, endCoords: Point) {
    this.garden = this.setLights(initialCoords, endCoords, (value) => value + 2)
  }

  public getLightsOn(): number {
    return this.garden.reduce((acc, row) => acc + row.reduce((acc, light) => acc + light, 0), 0)
  }

  private validateCoordinates(initialCoords: Point, endCoords: Point) {
    if (!this.isOnBounds(initialCoords) || !this.isOnBounds(endCoords)) {
      throw new Error("Invalid bulb number")
    }
  }

  private setLights(initialCoords: Point, endCoords: Point, transform: (value: number) => number): number[][] {
    this.validateCoordinates(initialCoords, endCoords)

    return this.garden.map((row, x) => {
      if (x >= initialCoords.getX() && x <= endCoords.getX()) {
        return row.map((light, y) => {
          if (y >= initialCoords.getY() && y <= endCoords.getY()) {
            return transform(this.garden[x][y])
          }
          return light
        })
      }
      return row
    })
  }

  private isOnBounds(point: Point): boolean {
    return point.getX() < SIZE_OF_GARDEN || point.getY() < SIZE_OF_GARDEN
  }
}
