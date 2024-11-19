const {test, expect} = require('@playwright/test');

test("get call", async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.status());
    expect(response.status()).toBe(200);
})