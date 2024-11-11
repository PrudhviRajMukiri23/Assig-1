const {expect} = require('@playwright/test')
const { timeout } = require('../../playwright.config')
const { BASE_URL } = require('../utils/constants.js')

class DiscoverPage {
    constructor(page){
        this.page = page;
        this.discoverCarTab = "(//a[@data-testid='gatsby-link']/span)[1]"
        this.sideMenuLinks = "(//div[@class='css-op2z87'])[3]/ul/li"
    }

    async getMenuOption() {
        await this.page.waitForLoadState()
        await this.page.getByRole('link', { name: 'Upptäck bilen' }).click();
        const links = await this.page.locator(this.sideMenuLinks)
        const count = await links.count();
        
        for (let i = 0; i < count; i++) {
            const linkText = await links.nth(i).innerText();
            console.log(`Link ${i + 1}: ${linkText}`);
          }
    }
}

exports.DiscoverPage = DiscoverPage