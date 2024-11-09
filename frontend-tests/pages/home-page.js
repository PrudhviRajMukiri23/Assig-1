const {expect} = require('@playwright/test')
const { timeout } = require('../../playwright.config')

class HomePage {
    constructor(page){
        this.page = page
        this.url = 'https://www.polestar.com/se'
        this.discover = "//a[@data-testid='gatsby-link' and starts-with(@href, '/se/polestar-4/')]"
        this.discoverPageTitle = 'Polestar 4 - Vår elektriska SUV-coupé | Polestar Sverige'
        this.readyForDelivery = "//a[@data-testid='not-gatsby-link' and starts-with(@href, '/se/preconfigured-cars/polestar-4/')]"
        this.readyForDeliveryPageTitle = 'Förkonfigurerade Polestar-bilar för snabb leverans | Polestar Sverige'
        this.homePageTitle = 'Polestar – Elbilar | Polestar Sverige'
        this.cookieSettingsPopup = "//div[@role='dialog']/div[@class='ot-sdk-container ot-scrollbar']"
        this.acceptCookieSettingsButton = "//button[@id='onetrust-accept-btn-handler']"
        this.welcomePopupText = "WelcomeWe and our advertising"
    }

    async checkAndAcceptCookies(page) {
        await page.waitForSelector(this.cookieSettingsPopup, {timeout: 5000})
        await expect(await page.locator(this.cookieSettingsPopup)).toBeVisible();
        await page.locator(this.acceptCookieSettingsButton).click();
    }

    async acceptCookies(){
        await this.page.goto(this.url)
        let title = await this.page.title()
        expect(title).toContain(this.homePageTitle)
        await this.checkAndAcceptCookies(this.page)
    }

    async verifyDiscoverButton(){
        await this.page.goto(this.url)
        await this.page.waitForTimeout(3000);
        await this.page.getByLabel('Welcome').locator('div').filter({ hasText: this.welcomePopupText }).first().click();
        await this.page.locator(this.acceptCookieSettingsButton).click();
        await this.page.locator(this.discover).click()
        await this.page.waitForTimeout(5000);
        expect(await this.page.title()).toContain(this.discoverPageTitle)
        await this.page.goBack();
    }

    async verifyReadyForDeliveryButton(){
        await this.page.goto(this.url)
        await this.page.waitForTimeout(3000);
        await this.page.getByLabel('Welcome').locator('div').filter({ hasText: this.welcomePopupText }).first().click();
        await this.page.locator(this.acceptCookieSettingsButton).click();
        await this.page.locator(this.readyForDelivery).click()
        await this.page.waitForTimeout(5000);
        expect(await this.page.title()).toContain(this.readyForDeliveryPageTitle)
        await this.page.goBack();
    }
}

exports.HomePage = HomePage