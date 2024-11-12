const {test, expect} = require('@playwright/test')
const { TestDriver } = require('../pages/test-driver-page');
const { HomePage } = require('../pages/home-page');

test('select the dropdown value for test drive', async ({page})=>{
    let testDrive = new TestDriver(page);
    let homepage = new HomePage(page);
    await homepage.acceptCookies()
    await testDrive.selectDifferentValuesInDropdown()
})