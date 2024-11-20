const {test} = require('@playwright/test')
import { HomePage } from '../pages/home-page'


let page
let context

test.beforeEach('configuring trace', async ({browser})=>{
    context = await browser.newContext()
    await context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()
})

test('Ready For Delivery link check', {tag: '@smoke'}, async ({browser})=>{
    const homepage = new HomePage(page)
    await homepage.verifyReadyForDeliveryButton()
})

test.afterEach('closing trace', async ()=>{
    const timestamp = new Date().toISOString().replace(/[:.-]/g, '_')
    const traceFileName = `trace-testcase-2-${timestamp}.zip`
    await context.tracing.stop({ path: `./traces/${traceFileName}` })
})