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

  it("should return 81516 given the instructions on the readme", () => {
    const garden = new Garden()

    garden.turnOn(new Point(887, 9), new Point(959, 629))
    garden.turnOn(new Point(454, 398), new Point(844, 448))
    garden.turnOff(new Point(539, 243), new Point(559, 965))
    garden.turnOff(new Point(370, 819), new Point(676, 868))
    garden.turnOff(new Point(145, 40), new Point(370, 997))
    garden.turnOff(new Point(301, 3), new Point(808, 453))
    garden.turnOn(new Point(351, 678), new Point(951, 908))
    garden.toggle(new Point(720, 196), new Point(897, 994))
    garden.toggle(new Point(831, 394), new Point(904, 860))

    expect(garden.getLightsOn()).equals(81516)
  })

  it("should return 2000001 given the instructions on the readme", () => {
    const garden = new Garden()

    garden.turnOn(new Point(0, 0), new Point(0, 0))
    garden.toggle(new Point(0, 0), new Point(999, 999))

    expect(garden.getLightsOn()).equals(2000001)
  })
})
