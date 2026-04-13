```markdown
# resume-tailor-n8n Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns, coding conventions, and operational workflows used in the `resume-tailor-n8n` JavaScript codebase. The repository focuses on backend logic without a specific framework, and emphasizes clear file organization, modular code, and Docker-based deployment practices.

## Coding Conventions

**File Naming**
- Use camelCase for file names.
  - Example: `resumeParser.js`, `userProfileService.js`

**Import Style**
- Use relative paths for imports.
  - Example:
    ```javascript
    import { parseResume } from './resumeParser';
    ```

**Export Style**
- Use named exports.
  - Example:
    ```javascript
    // In resumeParser.js
    export function parseResume(data) { ... }
    ```

**Commit Patterns**
- Commit messages are freeform, often concise (~41 characters), and may or may not use prefixes.

## Workflows

### Update Docker Compose for Backend Networking or Security
**Trigger:** When you need to change how backend services are exposed or secured via Docker Compose (e.g., updating ports, network interfaces, or proxy settings).
**Command:** `/update-docker-compose-networking`

1. Edit `deployment/docker-compose.yml` to adjust service ports, network interfaces, or proxy settings.
    - Example: Change the exposed port for an API service.
      ```yaml
      services:
        api:
          image: resume-tailor-api
          ports:
            - "8080:8080"  # Change as needed
          networks:
            - backend
      ```
2. Optionally, coordinate with frontend or proxy configuration if the changes affect security or exposure.
3. Commit your changes with a clear message describing the update.
4. Test the deployment to ensure services are correctly exposed and secured.

## Testing Patterns

- Test files follow the `*.test.*` pattern (e.g., `resumeParser.test.js`).
- The specific testing framework is unknown, but standard JavaScript testing practices apply.
- Example test file:
  ```javascript
  // resumeParser.test.js
  import { parseResume } from './resumeParser';

  test('parses a simple resume', () => {
    const result = parseResume('John Doe\nDeveloper');
    expect(result.name).toBe('John Doe');
  });
  ```

## Commands
| Command                           | Purpose                                                         |
|------------------------------------|-----------------------------------------------------------------|
| /update-docker-compose-networking  | Update Docker Compose for backend networking or security changes |
```
