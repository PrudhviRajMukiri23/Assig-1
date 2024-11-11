const {test, expect} = require('@playwright/test');
const {userID} = require('../test-cases/002_test-cases.pec')


test("delete call", async ({request}) => {
    const response = await request.delete(`https://reqres.in/api/users/${userID}`);
    expect(await response.status()).toBe(204);
});