const {test} = require('@playwright/test')
import { DiscoverPage } from '../pages/discover-page';
import { HomePage } from '../pages/home-page'

test('Accept Cookies check', async ({page})=>{
    const homepage = new HomePage(page)
    await homepage.acceptCookies()
})

test('Discover link check', async ({page})=>{
    const homepage = new HomePage(page)
    await homepage.verifyDiscoverButton()
})

test('Ready For Delivery link check', async ({page})=>{
    const homepage = new HomePage(page)
    await homepage.verifyReadyForDeliveryButton()
})

test('Print the side Menu values in discover page', async ({page})=>{
    const discoverpage = new DiscoverPage(page)
    await discoverpage.getMenuOption()
})