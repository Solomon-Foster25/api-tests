import { test, expect } from '@playwright/test';

test.describe('Todos API', () => {

    test('GET all todos returns 200 and valid array', async ({ request }) => {
        const response = await request.get(`/todos`);
        const body = await response.json();

        expect(response.status()).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('title');
        expect(body[0]).toHaveProperty('completed');
    });

    test('GET single todo returns 200 and correct data', async ({ request }) => {
        const response = await request.get(`/todos/1`);
        const body = await response.json();

        expect(response.status()).toBe(200);
        expect(body.id).toBe(1);
        expect(body).toHaveProperty('title');
        expect(body).toHaveProperty('completed');
    });

    test('GET non-existent todo returns 404', async ({ request }) => {
        const response = await request.get(`/todos/9999`);

        expect(response.status()).toBe(404);
    });

});