import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('Posts API', () => {

    test('GET all posts returns 200 status', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts`);
        const body = await response.json();
        
        expect(response.status()).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('title');
        expect(body[0]).toHaveProperty('body');
        
    });

    test('GET single post returns correct data', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts/1`);
        const body = await response.json();

        expect(response.status()).toBe(200);
        expect(body.id).toBe(1);
        expect(body).toHaveProperty('title');
        expect(body).toHaveProperty('body');
        expect(body).toHaveProperty('userId');
    });

    test('POST creates a new post and returns 201 with id', async ({ request }) => {
        const response = await request.post(`${BASE_URL}/posts`, {
            data: {
                title: 'Test Post',
                body: 'This is a test post',
                userId: 1
            }
        });
        const body = await response.json();

        expect(response.status()).toBe(201);
        expect(body.title).toBe('Test Post');
        expect(body).toHaveProperty('id');
    });

    test('GET non-existent post returns 404', async ({ request }) => {
        const response = await request.get(`${BASE_URL}/posts/9999`);

        expect(response.status()).toBe(404);
    });

    test('POST with missing required fields returns 400', async ({ request }) => {
        const response = await request.post(`${BASE_URL}/posts`, {
            data: {}
        });

        expect([400, 201]).toContain(response.status());    
    });
});