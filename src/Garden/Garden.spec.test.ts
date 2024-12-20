import { describe } from "node:test"
import { expect, it } from "vitest"
import { Garden } from "./Garden.js"
import { Point } from "../Point/Point.js"

describe("Garden", () => {
  it("should be initialized without any lights on", () => {
    const garden = new Garden()

    expect(garden.getLightsOn()).toBe(0)
  })
  it("throws exception if trying to light bulb out of defined range", () => {
    const garden = new Garden()
    expect(() => garden.turnOn(new Point(1001, 1001), new Point(1001, 1001))).toThrowError("Invalid bulb number")
  })

  it("should turn on one light", () => {
    const garden = new Garden()

    garden.turnOn(new Point(0, 1), new Point(0, 1))

    expect(garden.getLightsOn()).equals(1)
  })

  it("should turn on a range of lights", () => {
    const garden = new Garden()

    garden.turnOn(new Point(0, 0), new Point(1, 1))

    expect(garden.getLightsOn()).equals(4)
  })

  it("should turn off a range of lights", () => {
    const garden = new Garden()

    garden.turnOn(new Point(0, 0), new Point(1, 1))
    garden.turnOff(new Point(0, 0), new Point(0, 0))

    expect(garden.getLightsOn()).equals(3)
  })

  it("should toggle a range of lights", () => {
    const garden = new Garden()

    garden.turnOn(new Point(0, 0), new Point(1, 1))
    garden.turnOff(new Point(0, 0), new Point(0, 0))
    garden.toggle(new Point(0, 0), new Point(1, 1))

    expect(garden.getLightsOn()).equals(11)
  })
})
