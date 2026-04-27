# API Test Suite

Automated API test suite for [JSONPlaceholder](https://jsonplaceholder.typicode.com) built with Playwright and JavaScript. Tests run automatically on every push via GitHub Actions.

## Test Coverage

**Posts** (`posts.spec.js`)
- GET all posts returns 200 status and valid data
- GET single post returns correct data
- POST creates a new post and returns 201 status

**Users** (`users.spec.js`)
- GET all users returns 200 status and valid data
- GET single user returns correct data
- GET posts by a specific user returns correct data

## Tech Stack
- [Playwright](https://playwright.dev/) - test framework
- JavaScript
- GitHub Actions - CI pipeline

## How to Run

Install dependencies:
\```
npm ci
npx playwright install
\```

Run all tests:
\```
npx playwright test
\```