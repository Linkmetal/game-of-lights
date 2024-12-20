export class Garden {
  garden: boolean[][]

  constructor() {
    this.garden = Array(1000)
      .fill(false)
      .map(() => Array(1000).fill(false))
  }

  turnOn(arg0: number[], arg1: number[]): any {
    if (arg0[0] > 1000 || arg0[1] > 1000 || arg1[0] > 1000 || arg1[1] > 1000) {
      throw new Error("Invalid bulb number")
    }

    this.garden[0][0] = true
  }

  getLightsOn(): number {
    return this.garden.reduce((acc, row) => acc + row.reduce((acc, light) => acc + (light ? 1 : 0), 0), 0)
  }
}
