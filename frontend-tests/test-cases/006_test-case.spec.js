const {test} = require('@playwright/test')
import { HomePage } from '../pages/home-page'

test('Mouse hover and click Polestar 2', async ({page})=>{
    const homepage = new HomePage(page)
    await homepage.mouseHoverAndClickPolestar2Car()
})