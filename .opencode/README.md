# Agency Agent Operating Manual

## Overview

This project uses 17 specialized Agency agents in `.opencode/agents/` to replace the old simulated-role workflow. Each agent is a real OpenCode subagent with `mode: subagent`, invocable directly within any session.

## Agent Divisions

### Architecture & System
- **Backend Architect** — TDLib integration, storage design, API contracts, thread safety, data schema
- **AI Engineer** — ML features, smart search, intelligent automation
- **AI Data Remediation Engineer** — Data pipeline cleanup, quality assurance

### Optimization
- **Autonomous Optimization Architect** — Performance monitoring, cost guardrails, A/B routing, auto-optimization

### UX & Design
- **UX Architect** — Interaction design, navigation flow, structure, layout
- **UX Researcher** — User needs analysis, usability testing
- **UI Designer** — Visual design, component styling
- **Visual Storyteller** — Motion design, preview narratives, animation
- **Whimsy Injector** — Micro-interactions, delight, personality
- **Brand Guardian** — Brand identity, visual consistency
- **Psychologist** — User behavior, cognitive load, habit formation
- **Narratologist** — Story-driven experience design
- **Anthropologist** — Cultural context, inclusive design
- **Inclusive Visuals Specialist** — Accessibility, color contrast, a11y

### Review & QA
- **Historian** — Change tracking, retrospective analysis
- **Geographer** — Spatial UI, layout consistency

### AI & System
- **Image Prompt Engineer** — App screenshots, preview art generation

## Activation Patterns

### Direct Invocation
```
@Backend Architect review the upload pipeline in StorageEngine.kt
@UX Architect design the settings navigation flow
@Reviewer audit the recent changes to CloudMetadata.kt
```

### Multi-Agent Chains
```
@UX Architect @UI Designer @Whimsy Injector design the new onboarding screen
@Backend Architect @AI Engineer analyze TDLib file reconciliation for thread safety
@Autonomous Optimization Architect @Backend Architect profile the thumbnail loading pipeline
```

### Workflow Templates

#### Architecture Workflow
```
@Backend Architect review the StorageEngine.kt upload flow
→ @AI Engineer analyze the metadata pipeline
→ @Autonomous Optimization Architect profile the cache-first rendering
→ @Reviewer do a full audit
```

#### TDLib Workflow
```
@Backend Architect analyze TdLibManager.kt for thread safety
→ @AI Engineer propose smart caching for file reconciliation
→ @Autonomous Optimization Architect review the download queue limits
```

#### UI/UX Workflow
```
@UX Architect design the preview interaction flow
→ @UI Designer style the bottom sheet metadata layout
→ @Whimsy Injector add micro-interactions
→ @Brand Guardian verify visual consistency
```

#### Performance Workflow
```
@Autonomous Optimization Architect profile the hydration pipeline
→ @Backend Architect review data flow bottlenecks
→ @Reviewer verify no regressions
```

### Debate / Design Review
```
@UX Architect and @Backend Architect debate pagination vs infinite scroll for the media gallery
@UI Designer and @Inclusive Visuals Specialist review the color scheme for contrast accessibility
```

## Context Management

| Resource | Location | Purpose |
|----------|----------|---------|
| Agent definitions | `.opencode/agents/*.md` | Agent system prompts and behaviors |
| Skills | `.opencode/skills/*.md` | Reusable expertise modules |
| Legacy commands | `.opencode/commands/*.md` | `/command` definitions (backward compat) |
| Architecture docs | `docs/ARCHITECTURE.md` | System design documentation |
| TDLib docs | `docs/tdlib/` | TDLib integration reference |
| Project docs | `docs/` | Full documentation tree |

## Prompting Guide

### Be Specific
- Good: `@Backend Architect review StorageEngine.kt lines 200-350 for thread safety`
- Bad: `@Backend Architect review the code`

### Include Context
- Good: `@Backend Architect analyze the upload pipeline. Constraint: must be non-blocking, cache-first, never block UI waiting for Telegram`

### Order Matters
- Start with architecture/analysis before implementation
- End with review/QA
- Include constraints early

## TDLib-Specific Examples

```
@Backend Architect analyze TdLibManager.kt:
1. Is the ConcurrentHashMap for download intents thread-safe for concurrent uploads?
2. Does updateDeleteMessages handle race conditions?
3. Should onFileDownloaded use a mutex for the reconcile path?
```

```
@Backend Architect @AI Engineer design a smart thumbnail prefetch strategy:
- Constraints: 4 thumbnail slots, 2 preview slots, 1 full-download prefetch
- Must use MediaRuntimeManager as single source of truth
- Must not block UI
```

## CloudOS-Specific Conventions

### MVP Mindset
- Do not propose new screens, view models, or architectural rewrites
- Work within existing patterns: MediaRuntimeManager, Room cache, TDLib flow
- Prefer additive changes over refactoring
- Always verify build compiles

### Stability
- Three-tier path resolution: local path → thumbnail path → item fallback
- StateFlow observation in runtime, never polling
- Cache-first render, silent Telegram reconciliation
- Try-catch all Room operations — cache miss != crash

## Agents in `.opencode/agents/`

17 agents available. See `AGENTS.md` for full table.
