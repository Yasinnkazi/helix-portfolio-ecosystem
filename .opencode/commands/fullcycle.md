---
description: Run complete dev team cycle
command: /fullcycle <feature>
agent: build
---

# Fullcycle Command

## Purpose
Run the complete real-dev-team cycle from research to build to test to review.

## Code Edits
Allowed after planning.

## Execution
Use the current valid OpenCode agent only.
Do not call custom agent types.
Simulate the AI Dev Team internally using role-wise sections.

## Rules
- Start with research and planning.
- Then implement smallest safe MVP.
- Then test.
- Then review.
- Then fix critical issues.
- Then document.
- Ask before destructive changes.
- Ask before installing packages unless necessary.
- Do not overengineer.
- Do not answer as one generic article. Always use the required role-wise sections.
- Do not end with open-ended questions like "Would you like me to...". End with a recommended next command.

## Required Output

# Full AI Dev Team Cycle Report

## Manager Role
- Feature:
- Project type:
- Roles simulated:
- Execution mode:
- Success criteria:
- Build permission:

## Researcher Role
- Key findings:
- Best practices:
- Common risks:

## Product Role
- MVP:
- Must-have:
- Should-have:
- What to avoid:

## UX Role
- UX decisions:
- Empty/loading/error states:
- User friction:

## Security Role
- Security decisions:
- Risks handled:
- Remaining risks:

## Architect Role
- Architecture decisions:
- Files/modules affected:
- Data flow:

## Developer Role
- Implementation summary:
- Files changed:
- Important decisions:

## Tester Role
- Tests run:
- Test checklist:
- Bugs found:

## Reviewer Role
- Review result:
- Issues:
- Approval status:

## Debugger Role
- Include only if bugs were found.
- Root cause:
- Fix applied:
- Verification:

## Docs Role
- Docs updated:
- Missing docs:

## Manager Final Summary
- Final result:
- Files changed:
- How to run:
- How to test:
- Remaining risks:
- Recommended next step: