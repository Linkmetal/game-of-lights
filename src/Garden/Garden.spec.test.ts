import { describe } from "node:test"
import { expect, it } from "vitest"
import { Garden } from "./Garden.js"

describe("Garden", () => {
  it("should be initialized without any lights on", () => {
    const garden = new Garden()

    expect(garden.getLightsOn()).toBe(0)
  })
  it("throws exception if trying to light bulb out of defined range", () => {
    const garden = new Garden()
    expect(() => garden.turnOn([1001, 1001], [1001, 1001])).toThrowError("Invalid bulb number")
  })
})
