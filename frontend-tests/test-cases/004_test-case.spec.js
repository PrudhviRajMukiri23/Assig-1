const {test} = require('@playwright/test')
const { TestDriver } = require('../pages/test-driver-page');
const testdata = JSON.parse(JSON.stringify(require('../../utils/datadriventestdata.json')))
const {logger} = require('../utils/LoggingUtil')

test.describe('Data driven test', function() {
    for(const data of testdata){
        test.describe(`fill values of user ${data.id}`, function(){
            let page
            let context

            test.beforeEach('configuring trace', async ({browser})=>{
                logger.debug("trace setup for test case 004 is started...")
                context = await browser.newContext()
                await context.tracing.start({screenshots: true, snapshots: true})
                page = await context.newPage()
                logger.debug("trace setup for test case 004 is completed...")
            })

            test('Subcribbe to News of Polestar', async ()=>{
                let testDrive = new TestDriver(page);
                await testDrive.subcribeToNewsOfPolestar(data)
            })

            test.afterEach('closing trace', async ()=>{
                logger.debug("trace closing for test case 004 is started...")
                const timestamp = new Date().toISOString().replace(/[:.-]/g, '_')
                const traceFileName = `trace-testcase-4-${data.id}-${timestamp}.zip`
                await context.tracing.stop({ path: `./traces/${traceFileName}` })
                logger.debug("trace closing for test case 004 is completed...")
            })
        })
    }
} )
