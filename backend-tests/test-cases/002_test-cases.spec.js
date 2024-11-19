const {test, expect} = require('@playwright/test');
let {userID} = require('../utils/constants')

test("post call", async ({request}) => { 
    const response = await request.post('https://reqres.in/api/users',
        {
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify({
                "name": "morpheus",
                "job": "leader"
            })
        }
    );
    console.log(await response.status());
    const res = await response.json();
    userID = await res.id;
    //console.log(userID);
    expect(await response.status()).toBe(201);
});