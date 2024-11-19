const {expect} = require('@playwright/test')
const { timeout } = require('../../playwright.config')
const { BASE_URL } = require('../utils/constants.js')

class HomePage {
    constructor(page){
        this.page = page
        this.url = BASE_URL
        this.discover = "//a[@data-testid='gatsby-link' and starts-with(@href, '/se/polestar-4/')]"
        this.discoverPageTitle = 'Polestar 4 - Vår elektriska SUV-coupé | Polestar Sverige'
        this.readyForDelivery = "//a[@data-testid='not-gatsby-link' and starts-with(@href, '/se/preconfigured-cars/polestar-4/')]"
        this.readyForDeliveryPageTitle = 'Förkonfigurerade Polestar-bilar för snabb leverans | Polestar Sverige'
        this.homePageTitle = 'Polestar – Elbilar | Polestar Sverige'
        this.cookieSettingsPopup = "//div[@role='dialog']/div[@class='ot-sdk-container ot-scrollbar']"
        this.acceptCookieSettingsButton = "//button[@id='onetrust-accept-btn-handler']"
        this.welcomePopupText = "WelcomeWe and our advertising"
        this.polestar2 = "(//div[@class='css-1jof5mm']/button)[1]"
        this.polestar2hoveredvalue = "//a[@id='Q3JrNtyQSsyPb8CnsnE1Rg']"
        this.polestar2TestDriveUrl = "https://www.polestar.com/se/test-drive/booking/ps2/"
        this.dialogAccept="//button[text()='Accept all']"
    }

    async checkAndAcceptCookies(page) {
        await page.waitForSelector(this.cookieSettingsPopup, {timeout: 7000})
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
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.dialogAccept).click()
        await this.page.locator(this.discover).click()
        await this.page.waitForTimeout(5000);
        await expect(await this.page.title()).toContain(this.discoverPageTitle)
    }

    async verifyReadyForDeliveryButton(){
        await this.page.goto(this.url)
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.dialogAccept).click()
        await this.page.locator(this.readyForDelivery).click()
        await this.page.waitForTimeout(6000);
        await expect(await this.page.title()).toContain(this.readyForDeliveryPageTitle)
        await this.page.goBack();
    }

    async mouseHoverAndClickPolestar2Car() {
        await this.page.goto(this.url)
        await this.page.waitForLoadState()
        await this.page.waitForTimeout(4000)
        await this.page.locator(this.dialogAccept).click()
        await this.page.locator(this.polestar2).hover()
        await this.page.waitForTimeout(5000)
        await this.page.locator(this.polestar2hoveredvalue).click()
        await this.page.waitForTimeout(6000)
        await expect(this.page.url()).toContain(this.polestar2TestDriveUrl)
    }
}

exports.HomePage = HomePage