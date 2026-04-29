import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('Users API', () => {

    test('GET all users returns 200 and valid array with correct properties', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/users`);
        const body = await response.json();

        expect(response.status()).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('name');
        expect(body[0]).toHaveProperty('email');

    });

    test('GET single user returns 200 and correct user data', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/users/1`);
        const body = await response.json(); 

        expect(response.status()).toBe(200);
        expect(body.id).toBe(1);
        expect(body).toHaveProperty('name');
        expect(body).toHaveProperty('email');

    });

    test('GET posts by a specific user returns 200 and non-empty array', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/users/1/posts`);
        const body = await response.json(); 

        expect(response.status()).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);

    });

});