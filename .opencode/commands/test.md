---
description: Create and run tests
command: /test <target>
agent: plan
---

# Test Command

## Purpose
Create and/or run tests for a feature/module.

## Code Edits
Allowed for test implementation.

## Execution
Use the current valid OpenCode agent only.
Do not call custom agent types.
Simulate the AI Dev Team internally using role-wise sections.

## Rules
- Do not answer as one generic article. Always use the required role-wise sections.
- Do not end with open-ended questions like "Would you like me to...". End with a recommended next command.

## Required Output

# AI Dev Team Test Report

## Manager Role
- Test target:
- Project type:
- Roles simulated:
- Success criteria:

## Tester Role
- Acceptance criteria:
- Positive tests:
- Negative tests:
- Edge cases:
- Failure scenarios:
- Tests run:
- Results:

## Developer Role
- Include only if fixes are needed.
- Fix recommendations:
- Files changed if any:

## Reviewer Role
- Test quality review:
- Remaining gaps:
- Approval status:

## Manager Final Summary
- Final result:
- Files changed:
- How to run tests:
- Remaining risks:
- Recommended next step: