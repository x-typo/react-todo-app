# AI Agent Instructions

This file contains guidelines for AI assistants working on this project.

---

## Project Overview

- Single-page React 19 app bootstrapped with Vite; `src/main.tsx` mounts the root `TodoApp` component.
- Todos exist only in component state; no persistence layer or remote services are involved yet.
- Keep `TodoApp` as the primary stateful container; add shared elements under `src/components/` when the UI grows.

## Component & Styling Patterns

- Maintain the todo shape `{ id: number; text: string; completed: boolean; createdAt: Date }`. Preserve the `Date` instance so timestamp rendering and tests keep working.
- UI logic lives in `src/TodoApp.tsx` with sibling styles in `src/TodoApp.css`. Mirror this co-location pattern when adding new feature views.
- Stick with native HTML form controls unless a new dependency brings clear value. Update docs/tests if you introduce additional UI libraries.

## State & Behavior Guardrails

- Todo IDs come from `Date.now()`. If you change the strategy, ensure uniqueness and update tests that rely on ordering or rendering.
- The heading copy ("Todo List React App...") and empty-state text ("No todos yet.") are asserted in `src/__tests__/TodoApp.test.tsx`; adjust tests if you tweak copy.

## Testing Workflow

- Component tests run via Vitest + React Testing Library; configuration lives in `vitest.config.ts` using the jsdom environment.
- Test files sit under `src/__tests__/`. Shared matchers load from `src/__tests__/setupTests.ts`; extend there when you need additional globals.
- Primary CI command: `npm run test:run` (emits `test-results/junit.xml` consumed by test reporters and Teams notifications).
- For interactive runs, use `npm run test -- --watch`.

## Tooling & Commands

- Start the dev server with `npm run dev`. Always lint (`npm run lint`) and build (`npm run build`) before shipping larger changes.
- Keep TypeScript options in `tsconfig.app.json` intact—especially the included typings for `vitest/globals` and `@testing-library/jest-dom`.
- Nightly CI workflow lives at `.github/workflows/nightly-tests.yml`; it depends on `reporters/notifyMsTeams.cjs` and the `test-results/junit.xml` path. Update both if artifacts move.

---

## Commit Message Convention

This project uses **gitmoji + Conventional Commits**. Always include the appropriate emoji **and** type.

**Format**

```
<emoji> <type>: <subject>

<body>
```

**Common Gitmojis**

- `:sparkles:` – New features
- `:bug:` – Bug fixes
- `:memo:` – Documentation changes
- `:recycle:` – Code refactoring
- `:white_check_mark:` – Add/update tests
- `:art:` – Style/format only
- `:zap:` – Performance improvements
- `:wrench:` – Configuration changes
- `:rocket:` – Deployment changes
- `:lock:` – Security fixes
- `:arrow_up:` – Upgrade deps
- `:arrow_down:` – Downgrade deps
- `:fire:` – Remove code/files
- `:rotating_light:` – Fix linter warnings

**Accepted Commit Types**

- `feat` – user-facing enhancements or features
- `fix` – bug fixes
- `docs` – documentation-only updates
- `refactor` – structural changes that retain behavior
- `test` – add or update automated tests
- `style` – formatting with no logic impact
- `perf` – performance improvements
- `chore` – tooling/build/maintenance
- `deps` – dependency updates

**Examples**

```
:sparkles: feat: add email notifications for test results
:bug: fix: resolve authentication timeout issue
:memo: docs: update README with setup instructions
:recycle: refactor: simplify todo item state management
```

---

## Testing Requirements

- Always run tests before creating pull requests: `npm run test:run`
- Ensure all tests pass; add tests for new features and fixes

---

## Linting

- Run linting before pushing changes: `npm run lint`
- Resolve lint errors/warnings locally before opening a PR

---

## Pull Request Guidelines

- Use descriptive PR titles with gitmoji (e.g., `:bug: fix: handle null token`)
- Include a clear summary of changes; reference related issues
- Ensure CI/CD checks pass before merge

---

## Git Workflow (Agent-Driven, One Command)

**Trigger phrase:** “push the changes”

**Action (agent computes arguments, then runs):**

```powershell
push <type> <kebab-desc> "<emoji> <type>: <subject>"
# Example:
push feat add-login ":sparkles: feat: add login form"
```

- `<kebab-desc>` is derived from `<subject>` (lowercase, alphanumerics/hyphen).

> If the `pushmsg` helper exists in the user’s profile, you may alternatively run:
>
> ```powershell
> pushmsg "<type>: <subject>"
> # Example:
> pushmsg "feat: add login form"
> ```

**Deterministic steps the function executes**

1. Detect base branch from `origin/HEAD` (fallback `main`) and fast-forward-only pull when the working tree is clean; otherwise fetch `origin/<base>` so rebase still sees the latest commits.
2. Create/switch to feature branch `<type>/<kebab-desc>` (reuses existing if present).
3. Stage all changes and commit with the provided message.
4. `git fetch origin <base>` then **rebase onto** `origin/<base>` (linear history).
5. `git push -u origin HEAD`.
6. If GitHub CLI is available, open the existing PR (or create a Draft PR first) in the browser; otherwise the helper launches `https://github.com/<account>/<repo>/pull/new/<branch>`.
7. Switch back to `<base>` and fast-forward pull.

**Guardrails / failure handling**

- **Pull refused (non-FF) or rebase conflicts:** stop and prompt the user to resolve, then:
  ```powershell
  git add -A
  git rebase --continue
  git push -u origin HEAD
  ```
- **No changes to commit:** exit with “No changes to commit.”
- **Never** force-push or merge in this workflow.

**Prereqs (once per machine)**

```powershell
gh auth login        # web flow; stores token
gh auth setup-git    # wire Git to the GH token
# If base detection misbehaves, realign origin/HEAD:
git remote set-head origin --auto
```

**PR Summary Template**

Always close a successful push with a concise summary:

```
Changes pushed ✅
- Branch: <branch-name>
- Commit: <emoji> <type>: <subject>
- PR: <pull-request-url>
- Validation: <tests run or "not run">
- Next steps: <follow-up actions or "none">
```

Keep the bullet list tight and factual so the reviewer instantly knows where to look and what remains.

---

## Code Style

- React + TypeScript
- Follow existing patterns; functional components with hooks
- Keep components small and focused
- Use meaningful names

---

## GitHub Actions

- Test automation runs daily at 08:00 UTC (cron) and supports `workflow_dispatch`
- Email notifications are sent after each run
- JUnit reports are generated and published

---

## Project Structure

- `/src` — Application source code
- `/src/components` — React components
- `/test-results` — Test output and reports
- `/.github/workflows` — CI/CD workflows
