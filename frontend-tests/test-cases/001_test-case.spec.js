const {test} = require('@playwright/test')
import { HomePage } from '../pages/home-page'
const {logger} = require('../utils/LoggingUtil')


let page
let context

test.beforeEach('configuring trace', async ({browser})=>{
    logger.debug("trace setup for test case 001 is started...")
    context = await browser.newContext()
    await context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()
    logger.debug("trace setup for test case 001 is completed...")
})

test('Discover link check',{ tag: '@smoke'}, async ()=>{
    logger.debug("test case 001 is started...")
    const homepage = new HomePage(page)
    await homepage.verifyDiscoverButton()
    logger.debug("test case 001 is completed...")
})

test.afterEach('closing trace', async ()=>{
    logger.debug("trace closing for test case 001 is started...")
    const timestamp = new Date().toISOString().replace(/[:.-]/g, '_')
    const traceFileName = `trace-testcase-1-${timestamp}.zip`
    await context.tracing.stop({ path: `./traces/${traceFileName}` })
    logger.debug("trace closing for test case 001 is completed...")
})