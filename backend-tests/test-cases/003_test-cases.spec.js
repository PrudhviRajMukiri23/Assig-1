const {test, expect} = require('@playwright/test');
const {userID} = require('../utils/constants')

test("put call", async ({request}) => {
    const response = await request.put(`https://reqres.in/api/users/${userID}`,
        {
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify({
                "name": "morpheus",
                "job": "zion resident"
            })
        }
    );
    console.log(await response.status());
    expect(await response.status()).toBe(200);
});