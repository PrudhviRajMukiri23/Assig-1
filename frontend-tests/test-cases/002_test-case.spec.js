const {test} = require('@playwright/test')
import { HomePage } from '../pages/home-page'

test('Ready For Delivery link check', async ({page})=>{
    const homepage = new HomePage(page)
    await homepage.verifyReadyForDeliveryButton()
})