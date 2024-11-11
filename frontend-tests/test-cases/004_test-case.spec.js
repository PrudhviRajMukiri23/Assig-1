const {test} = require('@playwright/test')
import { DiscoverPage } from '../pages/discover-page';
import { HomePage } from '../pages/home-page'

test('Print the side Menu values in discover page', async ({page})=>{
    const discoverpage = new DiscoverPage(page)
    const homepage = new HomePage(page)
    await homepage.verifyDiscoverButton()
    await discoverpage.getMenuOption()
})