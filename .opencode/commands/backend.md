---
description: Handle backend/API/database tasks
command: /backend <task>
agent: build
---

# Backend Command

## Purpose
Handle backend/API/database tasks.

## Code Edits
Allowed for implementation tasks.

## Execution
Use the current valid OpenCode agent only.
Do not call custom agent types.
Simulate the AI Dev Team internally using role-wise sections.

## Rules
- Validate input.
- Handle errors.
- Avoid leaking secrets.
- Separate routes/services/data logic.
- Ask before schema-breaking changes.
- Do not answer as one generic article. Always use the required role-wise sections.
- Do not end with open-ended questions like "Would you like me to...". End with a recommended next command.

## Required Output

# AI Dev Team Backend Report

## Manager Role
- Task:
- Project type:
- Roles simulated:
- Execution mode:
- Success criteria:

## Security Role
- Security requirements:
- Input validation:
- Auth/authz risks:
- Secrets/logging risks:

## Architect Role
- Backend architecture:
- Routes/services/data layers:
- Integration points:
- What to keep simple:

## Backend Role
- APIs/services:
- Business logic:
- Error handling:
- Files changed or likely needed:

## Database Role
- Data model:
- Schema/migration notes:
- Indexes/constraints:
- Risks:

## Tester Role
- Test checklist:
- Edge cases:
- Failure scenarios:

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