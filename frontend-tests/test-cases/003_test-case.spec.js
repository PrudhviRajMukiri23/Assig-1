const {test} = require('@playwright/test')
const { TestDriver } = require('../pages/test-driver-page');
const testdata = JSON.parse(JSON.stringify(require('../../utils/testdata.json')))
const {logger} = require('../utils/LoggingUtil')

let page
let context

test.beforeEach('configuring trace', async ({browser})=>{
    logger.debug("trace setup for test case 003 is started...")
    context = await browser.newContext()
    await context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()
    logger.debug("trace setup for test case 003 is completed...")
})

test('select the dropdown value, first name & validate client error', async ({browser})=>{
    let testDrive = new TestDriver(page);
    await testDrive.subcribeToNewsOfPolestar(testdata)
})

test.afterEach('closing trace', async ()=>{
    logger.debug("trace closing for test case 003 is started...")
    const timestamp = new Date().toISOString().replace(/[:.-]/g, '_')
    const traceFileName = `trace-testcase-3-${timestamp}.zip`
    await context.tracing.stop({ path: `./traces/${traceFileName}` })
    logger.debug("trace closing for test case 003 is completed...")
})