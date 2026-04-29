# API Test Suite

Automated API test suite for [JSONPlaceholder](https://jsonplaceholder.typicode.com) built with Playwright and JavaScript. Tests run automatically on every push via GitHub Actions.

## Test Coverage

**Posts** (`posts.spec.js`)
- GET all posts returns 200 and valid array with correct properties
- GET single post returns correct data
- POST creates a new post and returns 201 with id
- GET non-existent post returns 404
- POST with missing required fields
- PUT updates a post and returns updated data
- DELETE a post returns 200

**Users** (`users.spec.js`)
- GET all users returns 200 and valid array with correct properties
- GET single user returns 200 and correct user data
- GET posts by a specific user returns 200 and non-empty array

**Todos** (`todos.spec.js`)
- GET all todos returns 200 and valid array
- GET single todo returns 200 and correct data
- GET non-existent todo returns 404

## Tech Stack
- [Playwright](https://playwright.dev/) - test framework
- JavaScript
- GitHub Actions - CI pipeline

## Folder Structure

    api-tests/
    ├── tests/
    │   ├── posts.spec.js
    │   ├── users.spec.js
    │   └── todos.spec.js
    ├── .github/
    │   └── workflows/
    │       └── test.yml
    ├── package.json
    └── README.md

## How to Run

Install dependencies:

    npm ci
    npx playwright install

Run all tests:

    npx playwright test

Run a specific file:

    npx playwright test posts.spec.js
