const {test} = require('@playwright/test')
const { TestDriver } = require('../pages/test-driver-page');
const testdata = JSON.parse(JSON.stringify(require('../../utils/testdata.json')))

let page
let context

test.beforeEach('configuring trace', async ({browser})=>{
    context = await browser.newContext()
    await context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()
})

test('select the dropdown value, first name & validate client error', async ({browser})=>{
    let testDrive = new TestDriver(page);
    await testDrive.selectDifferentValuesInDropdown(testdata)
})

test.afterEach('closing trace', async ()=>{
    const timestamp = new Date().toISOString().replace(/[:.-]/g, '_')
    const traceFileName = `trace-testcase-3-${timestamp}.zip`
    await context.tracing.stop({ path: `./traces/${traceFileName}` })
})