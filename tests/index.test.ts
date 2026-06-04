import { expect, test } from "bun:test"
import { pspiceToSpicePackageName } from "lib/index"

test("exports package marker", () => {
  expect(pspiceToSpicePackageName).toBe("pspice-to-spice")
})
