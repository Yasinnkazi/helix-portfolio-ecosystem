---
description: Review code, feature, or plan
command: /review <target>
agent: plan
---

# Review Command

## Purpose
Review code, plan, feature, or project structure.

## Code Edits
Not allowed unless user explicitly asks.

## Execution
Use the current valid OpenCode agent only.
Do not call custom agent types.
Simulate the AI Dev Team internally using role-wise sections.

## Rules
- Do not answer as one generic article. Always use the required role-wise sections.
- Do not end with open-ended questions like "Would you like me to...". End with a recommended next command.

## Required Output

# AI Dev Team Review Report

## Manager Role
- Review target:
- Review type:
- Roles simulated:
- Success criteria:

## Reviewer Role
- Summary:
- Issues found:
- Quality concerns:

## Security Role
- Security risks:
- Privacy risks:
- Safe defaults:

## UX Role
- UX gaps:
- User friction:
- Clarity issues:

## Architect Role
- Architecture risks:
- Maintainability concerns:
- Overengineering:

## Tester Role
- Test gaps:
- Edge cases:
- Regression risks:

## Manager Final Summary
- Approval status:
- Must-fix:
- Should-fix:
- Nice-to-have:
- Recommended next step: