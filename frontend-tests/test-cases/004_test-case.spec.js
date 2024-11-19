const {test, expect} = require('@playwright/test')
const { TestDriver } = require('../pages/test-driver-page');
const testdata = JSON.parse(JSON.stringify(require('../../datadriventestdata.json')))

test.describe('Data driven test', function() {
    for(const data of testdata){
        test.describe(`fill values of user ${data.id}`, function(){
            test('select the dropdown value, first name & validate client error', async ({page})=>{
                let testDrive = new TestDriver(page);
                await testDrive.selectDifferentValuesInDropdown(data)
            })
        })
    }
} )
