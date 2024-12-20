export class Point {
  getX() {
    return this.x
  }
  getY() {
    return this.y
  }
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}
}
