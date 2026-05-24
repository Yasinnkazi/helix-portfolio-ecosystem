---
description: Fix bugs using evidence
command: /debug <error/log/bug>
agent: build
---

# Debug Command

## Purpose
Fix bugs using evidence.

## Code Edits
Allowed for smallest safe fix.

## Execution
Use the current valid OpenCode agent only.
Do not call custom agent types.
Simulate the AI Dev Team internally using role-wise sections.

## Rules
- Use logs/errors as evidence.
- Do not guess randomly.
- Do not change unrelated files.
- Apply smallest safe fix.
- Verify fix if possible.
- Do not answer as one generic article. Always use the required role-wise sections.
- Do not end with open-ended questions like "Would you like me to...". End with a recommended next command.

## Required Output

# AI Dev Team Debug Report

## Manager Role
- Bug summary:
- Project type:
- Roles simulated:
- Success criteria:

## Debugger Role
- Error summary:
- Root cause:
- Evidence:
- Fix strategy:

## Developer Role
- Fix applied:
- Files changed:
- Technical notes:

## Tester Role
- Verification steps:
- Tests run:
- Result:

## Reviewer Role
- Review result:
- Remaining risks:

## Manager Final Summary
- Root cause:
- Fix:
- Files changed:
- How to test:
- Prevention: