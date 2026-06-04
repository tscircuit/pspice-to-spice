import { expect, test } from "bun:test"
import { pspiceToSpice } from "lib/index"

test("round-trips pspice continuation cards through spicets", () => {
  const source = [
    "PSpice multiline expression",
    "EGAIN out 0 VALUE = {",
    "+ V(in) * 2",
    "+ }",
    "VIN in 0 DC 1",
    ".END",
    "",
  ].join("\n")

  expect(pspiceToSpice(source)).toBe(source)
})
