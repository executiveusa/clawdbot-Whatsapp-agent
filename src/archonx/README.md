# ArchonX Module

The ArchonX module provides specialized AI agents for advanced operations in the OpenClaw system.

## Directory Structure

```
src/archonx/
├── agents/              # Agent implementations
│   ├── pauli.ts        # Quantum operations and physics simulations
│   ├── synthia.ts      # Data synthesis and integration
│   └── index.ts        # Agent exports
├── orchestration/       # Coordination and orchestration logic
│   └── index.ts
├── paulis-place/        # Dedicated environment for Pauli agent
│   └── index.ts
└── index.ts            # Main module export
```

## Configuration

The `archonx-config.json` file in the repository root contains configuration for all ArchonX agents:

```json
{
  "archonx": {
    "version": "1.0.0",
    "agents": {
      "pauli": { ... },
      "synthia": { ... }
    },
    "orchestration": { ... },
    "paulis-place": { ... }
  }
}
```

## Agents

### Pauli Agent

Specialized in quantum operations and advanced physics simulations.

**Features:**
- Quantum operations support
- Physics simulations
- Advanced analysis capabilities

**Usage:**
```typescript
import { createPauliAgent } from './archonx/agents';

const agent = createPauliAgent({
  name: "Pauli",
  model: "claude-3-5-sonnet-20241022",
  workspace: "~/.openclaw/archonx/pauli"
});

await agent.initialize();
const response = await agent.processMessage("Analyze quantum state");
```

### Synthia Agent

Specialized in data synthesis and integration operations.

**Features:**
- Data synthesis
- Integration capabilities
- Multi-source analysis

**Usage:**
```typescript
import { createSynthiaAgent } from './archonx/agents';

const agent = createSynthiaAgent({
  name: "Synthia",
  model: "claude-3-5-sonnet-20241022",
  workspace: "~/.openclaw/archonx/synthia"
});

await agent.initialize();
const result = await agent.synthesize({ data: "..." });
```

## Development

### Running Tests

```bash
pnpm test src/archonx/agents/index.test.ts
```

### Adding New Agents

1. Create a new TypeScript file in `src/archonx/agents/`
2. Implement the agent class with config and state interfaces
3. Export the agent from `src/archonx/agents/index.ts`
4. Add configuration to `archonx-config.json`
5. Add tests following the existing pattern

## Integration

The ArchonX module integrates with the OpenClaw system through:

- Configuration in `archonx-config.json`
- Agent workspace management
- Orchestration coordination
- Dedicated environments (paulis-place)

## Future Extensions

The ArchonX module is designed to be extensible. Future agents can be added following the established patterns:

1. Agent implementation in `src/archonx/agents/`
2. Configuration in `archonx-config.json`
3. Tests in `src/archonx/agents/[agent-name].test.ts`
4. Documentation updates
