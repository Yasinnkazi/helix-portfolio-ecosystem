---
description: Build a feature using dev team workflow
command: /feature <feature>
agent: build
---

# Feature Command

## Purpose
Build a feature using full AI Dev Team workflow.

## Code Edits
Allowed, but only smallest safe implementation.

## Execution
Use the current valid OpenCode agent only.
Do not call custom agent types.
Simulate the AI Dev Team internally using role-wise sections.

## Rules
- Use existing project stack.
- Do not rewrite the whole project.
- Do not delete important files without confirmation.
- Ask before large refactors.
- Ask before installing packages unless clearly necessary.
- Implement MVP first.
- Include UX, security, and tests.
- After building, run safe tests if possible.
- Do not answer as one generic article. Always use the required role-wise sections.
- Do not end with open-ended questions like "Would you like me to...". End with a recommended next command.

## Required Output

# AI Dev Team Feature Build Report

## Manager Role
- Feature:
- Project type:
- Roles simulated:
- Execution mode:
- Success criteria:
- Task breakdown:
- Build order:
- Dependencies:

## Product Role
- MVP scope:
- Product decisions:

## UX Role
- UX decisions:
- Empty/loading/error states:

## Security Role
- Security checks:
- Risks handled:

## Architect Role
- Architecture decisions:
- Files/modules affected:

## Developer Role
- Implementation summary:
- Files changed:
- Important code decisions:

## Tester Role
- Tests run:
- Test checklist:
- Bugs found:

## Reviewer Role
- Review result:
- Issues:
- Approval status:

## Debugger Role
- Only include if bugs were found.
- Root cause:
- Fix applied:
- Verification:

## Manager Final Summary
- What was built:
- Files changed:
- How to run:
- How to test:
- Remaining risks:
- Recommended next step: