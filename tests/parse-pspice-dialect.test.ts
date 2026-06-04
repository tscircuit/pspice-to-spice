import { expect, test } from "bun:test"
import { parsePspice } from "lib/index"

test("defaults parsing to the pspice dialect", () => {
  const source = [
    "PSpice parameterized circuit",
    ".PARAM RLOAD = 1k",
    "V1 out 0 DC 5",
    "R1 out 0 {RLOAD}",
    ".OP",
    ".END",
    "",
  ].join("\n")
  const netlist = parsePspice(source)

  expect(netlist.dialect).toBe("pspice")
  expect(netlist.getString({ dialect: "pspice" })).toBe(source)
})
