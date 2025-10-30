# AI Agent Instructions

This file contain guidelines for AI assistants working on this project.

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

1. Detect base branch from `origin/HEAD` (fallback `main`) and **fast-forward-only** pull.
2. Create/switch to feature branch `<type>/<kebab-desc>` (reuses existing if present).
3. Stage all changes and commit with the provided message.
4. `git fetch origin <base>` then **rebase onto** `origin/<base>` (linear history).
5. `git push -u origin HEAD`.
6. If a PR already exists for the branch, open it in the browser; otherwise create a **Draft PR** with auto-filled title/body against `<base>`, then open it.
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
