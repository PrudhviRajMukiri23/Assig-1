const {test, expect} = require('@playwright/test');

var userID;

test("get call", async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

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
    console.log(await response.json());
    const res = await response.json();
    userID = await res.id;
    console.log(userID);
    expect(await response.status()).toBe(201);
});

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
    console.log(await response.json());
    expect(await response.status()).toBe(200);
});

test("delete call", async ({request}) => {
    const response = await request.delete(`https://reqres.in/api/users/${userID}`);
    expect(await response.status()).toBe(204);
});