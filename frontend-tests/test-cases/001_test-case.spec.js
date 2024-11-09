const {test} = require('@playwright/test')
import { HomePage } from '../pages/home-page'

test('Accept Cookies check', async ({page})=>{
    const homepage = new HomePage(page)
    await homepage.acceptCookies();
})

test('Discover link check', async ({page})=>{
    const homepage = new HomePage(page)
    await homepage.verifyDiscoverButton();
})

test('Ready For Delivery link check', async ({page})=>{
    const homepage = new HomePage(page)
    await homepage.verifyReadyForDeliveryButton();
})