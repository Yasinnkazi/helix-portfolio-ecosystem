---
description: Handle Android-specific tasks
command: /android <task>
agent: build
---

# Android Command

## Purpose
Handle Android-specific research, planning, building, or debugging.

## Code Edits
Allowed for implementation tasks.

## Execution
Use the current valid OpenCode agent only.
Do not call custom agent types.
Simulate the AI Dev Team internally using role-wise sections.

## Rules
- Respect Android lifecycle.
- Avoid main-thread blocking.
- Check permissions.
- Check storage.
- Check performance and battery.
- Ask before major refactors.
- Do not answer as one generic article. Always use the required role-wise sections.
- Do not end with open-ended questions like "Would you like me to...". End with a recommended next command.

## Required Output

# AI Dev Team Android Report

## Manager Role
- Task:
- Project type:
- Roles simulated:
- Execution mode:
- Success criteria:

## Android Role
- Android approach:
- Lifecycle considerations:
- Storage considerations:
- Permission considerations:
- Performance/battery considerations:
- Files changed or likely needed:

## UX Role
- UX notes:
- Empty/loading/error states:
- User friction:

## Security Role
- Security risks:
- Privacy risks:
- Safe defaults:

## Architect Role
- Architecture notes:
- Modules/layers:
- Integration points:
- What to keep simple:

## Tester Role
- Test checklist:
- Edge cases:
- Regression risks:

## Reviewer Role
- Review result:
- Issues:
- Approval status:

## Manager Final Summary
- Final recommendation:
- Files changed:
- How to run/test:
- Remaining risks:
- Recommended next step: