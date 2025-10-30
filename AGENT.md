# AI Agent Instructions

This file contains guidelines for AI assistants working on this project.

## Commit Message Convention

This project uses **gitmoji** for commit messages. Always include the appropriate emoji when creating commits:

### Common Gitmojis

- `:sparkles:` - New features
- `:bug:` - Bug fixes
- `:memo:` - Documentation changes
- `:recycle:` - Code refactoring
- `:white_check_mark:` - Adding or updating tests
- `:art:` - Code style/formatting improvements
- `:zap:` - Performance improvements
- `:wrench:` - Configuration changes
- `:rocket:` - Deployment changes
- `:lock:` - Security fixes
- `:arrow_up:` - Upgrading dependencies
- `:arrow_down:` - Downgrading dependencies
- `:fire:` - Removing code or files
- `:rotating_light:` - Fixing linter warnings

Refer to [gitmoji.dev](https://gitmoji.dev) for the full catalog.

### Commit Message Format

```
<emoji> <type>: <subject>

<body>
```

### Accepted Commit Types

- `feat` - user-facing enhancements or features
- `fix` - bug fixes
- `docs` - documentation-only updates
- `refactor` - structural changes that retain existing behavior
- `test` - add or update automated tests
- `style` - formatting or presentation adjustments with no logic impact
- `perf` - performance improvements
- `chore` - tooling, build, or maintenance tasks
- `deps` - dependency updates (combine with `:arrow_up:` or `:arrow_down:` gitmoji)

**Examples:**

```
:sparkles: feat: add email notifications for test results
:bug: fix: resolve authentication timeout issue
:memo: docs: update README with setup instructions
:recycle: refactor: simplify todo item state management
```

## Testing Requirements

- Always run tests before creating commits: `npm run test:run`
- Ensure all tests pass before creating pull requests
- Add tests for new features and bug fixes

## Linting

- Run linting before pushing changes: `npm run lint`
- Resolve lint errors or warnings locally before opening a PR

## Pull Request Guidelines

- Use descriptive PR titles with gitmoji
- Include a clear summary of changes
- Reference related issues if applicable
- Ensure CI/CD checks pass

## Git Workflow

When creating PRs, follow this workflow:

1. **Create branch and make changes:**

   ```bash
   git checkout main
   git pull origin main  # Ensure you are working with the latest code
   git checkout -b <type>/<description>  # <type> should match an accepted commit type (e.g., feat, fix)
   # Make your changes
   git add .
   git commit -m "<emoji> <type>: <message>"
   ```

2. **Push to remote:**

   ```bash
   git push -u origin <branch-name>
   ```

3. **Switch back to main immediately after push:**
   ```bash
   git checkout main
   ```
   This keeps your working directory clean and ready for the next task.

## Code Style

- This is a React + TypeScript project
- Follow existing code patterns and conventions
- Use functional components with hooks
- Keep components small and focused
- Write meaningful variable and function names

## GitHub Actions

- Test automation runs daily at 8 AM UTC via cron schedule
- Can be triggered manually via workflow_dispatch
- Email notifications are sent after each test run
- JUnit reports are generated and published

## Project Structure

- `/src` - Application source code
- `/src/components` - React components
- `/test-results` - Test output and reports
- `/.github/workflows` - CI/CD workflows
