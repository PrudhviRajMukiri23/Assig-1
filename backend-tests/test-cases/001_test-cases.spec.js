const {test, expect, request} = require('@playwright/test');
const { API_BASE_URL } = require('../../utils/constants');
const { RequestsSpec } = require('../utils/RequestsSpec');

let userID = ''
let req = ''

test.beforeAll('Initialising requests', ()=>{
    req = new RequestsSpec()
})

test("get call", async ({request}) => {
    try {
        const response = await req.get(`${API_BASE_URL}/users?page=2`, request);
        console.log(await response.status());
        expect(response.status()).toBe(200);
    } catch (error) {
        ErrorHandler.handleError(`GET request failed ${url}: ${error.message}`);
      }
})

test("post call", async ({request}) => { 
    try {
        const response = await req.post(`${API_BASE_URL}/users`, request)
        console.log(await response.status());
        const res = await response.json();
        userID = await res.id;
        expect(await response.status()).toBe(201);
    } catch (error) {
        ErrorHandler.handleError(error, `POST request failed ${url}: ${error.message}`);
    }
})

test("put call", async ({request}) => {
    try{
        const response = await req.put(`${API_BASE_URL}/users/${userID}`,request)
        console.log(await response.status());
        expect(await response.status()).toBe(200);
    } catch (error) {
        ErrorHandler.handleError(error, `PUT request failed ${url}: ${error.message}`);
    }
})

test("delete call", async ({request}) => {
    try{
        const response = await req.delete(`${API_BASE_URL}/users/${userID}`, request);
        expect(await response.status()).toBe(204);
    } catch (error) {
        ErrorHandler.handleError(error, `DELETE request failed ${url}: ${error.message}`);
    }
})