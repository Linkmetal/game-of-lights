import { describe } from "node:test"
import { expect, it } from "vitest"
import { Garden } from "./Garden.js"

describe("Garden", () => {
  it("should be initialized without any lights on", () => {
    const garden = new Garden()

    expect(garden.getLightsOn()).toBe(0)
  })
})
