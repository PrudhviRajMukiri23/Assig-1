const {test} = require('@playwright/test')
const { TestDriver } = require('../pages/test-driver-page');
const testdata = JSON.parse(JSON.stringify(require('../../utils/testdata.json')))


test('select the dropdown value, first name & validate client error', async ({page})=>{
    let testDrive = new TestDriver(page);
    await testDrive.selectDifferentValuesInDropdown(testdata)
})