const {test, expect} = require('@playwright/test');
const {userID} = require('../utils/constants')


test("delete call", async ({request}) => {
    const response = await request.delete(`https://reqres.in/api/users/${userID}`);
    expect(await response.status()).toBe(204);
});