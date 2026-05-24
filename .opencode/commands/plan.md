---
description: Create a practical implementation plan
command: /plan <feature>
agent: plan
---

# Plan Command

## Purpose
Create a practical implementation plan without editing code.

## Code Edits
Not allowed unless user explicitly says to implement.

## Execution
Use the current valid OpenCode agent only.
Do not call custom agent types.
Simulate the AI Dev Team internally using role-wise sections.

## Rules
- Do not answer as one generic article. Always use the required role-wise sections.
- Do not end with open-ended questions like "Would you like me to...". End with a recommended next command.

## Required Output

# AI Dev Team Implementation Plan

## Manager Role
- Task:
- Project type:
- Roles simulated:
- Execution mode:
- Success criteria:
- Task breakdown:
- Dependencies:
- Priority order:
- Milestones:

## Product Role
- MVP scope:
- Must-have:
- Should-have:
- What to avoid:

## UX Role
- User flow:
- UX requirements:
- Empty/loading/error states:

## Security Role
- Security requirements:
- Privacy requirements:
- Risk warnings:

## Architect Role
- Architecture plan:
- Files/modules likely needed:
- Data flow:
- Integration points:

## Tester Role
- Acceptance criteria:
- Test checklist:
- Edge cases:

## Reviewer Role
- Practicality review:
- Risks:
- Approval status:

## Manager Final Summary
- Recommended first step:
- Build order:
- Best next command: