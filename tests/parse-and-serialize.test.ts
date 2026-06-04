import { expect, test } from "bun:test"
import { pspiceToSpice } from "lib/index"

test("parses pspice and serializes it as spice", () => {
  const source = [
    "PSpice RC circuit",
    "V1 in 0 DC 5",
    "R1 in out 1k",
    "C1 out 0 100n",
    ".TRAN 1us 10ms",
    ".END",
    "",
  ].join("\n")

  expect(pspiceToSpice(source)).toBe(source)
})
