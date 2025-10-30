# AI Agent Instructions

This file contains guidelines for AI assistants working on this project.

## Commit Message Convention

This project uses **gitmoji** for commit messages. Always include the appropriate emoji when creating commits:

### Common Gitmojis
- ✨ `:sparkles:` - New features
- 🐛 `:bug:` - Bug fixes
- 📝 `:memo:` - Documentation changes
- ♻️ `:recycle:` - Code refactoring
- ✅ `:white_check_mark:` - Adding or updating tests
- 🎨 `:art:` - Code style/formatting improvements
- ⚡ `:zap:` - Performance improvements
- 🔧 `:wrench:` - Configuration changes
- 🚀 `:rocket:` - Deployment changes
- 🔒 `:lock:` - Security fixes
- ⬆️ `:arrow_up:` - Upgrading dependencies
- ⬇️ `:arrow_down:` - Downgrading dependencies
- 🔥 `:fire:` - Removing code or files
- 🚨 `:rotating_light:` - Fixing linter warnings

### Commit Message Format
```
<emoji> <type>: <subject>

<body>
```

**Examples:**
```
✨ feat: add email notifications for test results
🐛 fix: resolve authentication timeout issue
📝 docs: update README with setup instructions
♻️ refactor: simplify todo item state management
```

## Testing Requirements

- Always run tests before creating commits: `npm run test:run`
- Ensure all tests pass before creating pull requests
- Add tests for new features and bug fixes

## Pull Request Guidelines

- Use descriptive PR titles with gitmoji
- Include a clear summary of changes
- Reference related issues if applicable
- Ensure CI/CD checks pass

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
