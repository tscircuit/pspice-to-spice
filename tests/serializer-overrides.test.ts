import { expect, test } from "bun:test"
import { pspiceToSpice } from "lib/index"

test("allows serializer overrides", () => {
  const source = [
    "PSpice operating point",
    "V1 in 0 DC 3.3",
    "RLOAD in 0 10k",
    ".OP",
    ".END",
    "",
  ].join("\n")

  expect(pspiceToSpice(source, { serialize: { end: "never" } })).toBe(
    [
      "PSpice operating point",
      "V1 in 0 DC 3.3",
      "RLOAD in 0 10k",
      ".OP",
      "",
    ].join("\n"),
  )
})
