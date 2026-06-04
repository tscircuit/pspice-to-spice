import {
  type SpiceDialect,
  type SpiceNetlist,
  type SpiceParseOptions,
  type SpiceSerializeOptions,
  parseSpiceNetlist,
} from "spicets"

export interface PspiceToSpiceOptions {
  parse?: Omit<SpiceParseOptions, "dialect"> & {
    dialect?: SpiceDialect
  }
  serialize?: SpiceSerializeOptions
}

export function parsePspice(
  source: string,
  options: PspiceToSpiceOptions["parse"] = {},
): SpiceNetlist {
  return parseSpiceNetlist(source, {
    ...options,
    dialect: options.dialect ?? "pspice",
  })
}

export function pspiceToSpice(
  source: string,
  options: PspiceToSpiceOptions = {},
): string {
  const netlist = parsePspice(source, options.parse)

  return netlist.getString({
    dialect: "ngspice",
    ...options.serialize,
  })
}

export type { SpiceNetlist }
