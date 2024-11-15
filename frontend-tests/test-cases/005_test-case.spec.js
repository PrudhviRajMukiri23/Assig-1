const {test, expect} = require('@playwright/test')
const { TestDriver } = require('../pages/test-driver-page');
const { HomePage } = require('../pages/home-page');
const testdata = JSON.parse(JSON.stringify(require('../../testdata.json')))


test('select the dropdown value, first name & validate client error', async ({page})=>{
    let testDrive = new TestDriver(page);
    let homepage = new HomePage(page);
    await homepage.acceptCookies()
    await testDrive.selectDifferentValuesInDropdown(testdata)
})