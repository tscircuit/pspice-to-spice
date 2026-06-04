# pspice-to-spice

Convert PSPICE to ngspice-compatible SPICE for simulation.

## Development

```bash
bun install
bun test
bun run typecheck
bun run format:check
```

This repo is bootstrapped as a source-distributed TypeScript package. The public
entrypoint is [lib/index.ts](./lib/index.ts).

## Usage

```ts
import { parsePspice, pspiceToSpice } from "pspice-to-spice"

const spice = pspiceToSpice(pspiceSource)
const netlist = parsePspice(pspiceSource)
```

Conversion is delegated to [`spicets`](https://github.com/tscircuit/spicets).
