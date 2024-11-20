const { BASE_URL } = require("../../utils/constants")
const {expect} = require('@playwright/test')
const { CookieeActions } = require('../module/CookieeActions')


class TestDriver {
    constructor(page) {
        this.page = page
        this.url = BASE_URL
        this.newsLetterSubcribe="//span[text()='Prenumerera']/ancestor::a[@class='css-1d0iuc5']"
        this.firstName = "//input[@name='firstName']"
        this.lastName = "//input[@name='lastName']"
        this.lastNameValidationErrorMessage = "//div[@id='text-field-:R553albn9aj5:-message']"
        this.emailvalue = "//input[@name='email']"
        this.zipcode = "//input[@name='zipCode']"
        this.testDriveCheckbox="//input[@type='checkbox' and @id='a4ca2ade-63dd-43c3-a17b-1f42b87db55c']"
        this.submitForTestDrive="//button[@type='submit']"
        this.confirmTestDrive="//*[contains(text(), 'Bekräfta din prenumeration')]"
    }

    async performAction(page) {
        const cookieActions = new CookieeActions();
        await cookieActions.cookieAccept(page);
    }

    async subcribeToNewsOfPolestar(data) {
        await this.page.goto(this.url)
        await this.performAction(this.page)
        await this.page.locator(this.newsLetterSubcribe).click()
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.firstName).focus()
        await this.page.locator(this.firstName).fill(data.firstname)
        await this.page.locator(this.lastName).focus()
        await this.page.keyboard.type(data.lastname)
        await this.page.keyboard.down("Shift")
        for(let i=0;i<=2;i++){
            await this.page.keyboard.press("ArrowLeft")
        }
        await this.page.keyboard.up("Shift")
        await this.page.keyboard.press("Backspace")
        await this.page.keyboard.press("Enter")
        await expect(await this.page.locator(this.lastNameValidationErrorMessage)).toBeVisible();
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.lastName).focus()
        await this.page.keyboard.type(data.lastname)
        await this.page.locator(this.emailvalue).fill(data.address.email)
        await this.page.locator(this.zipcode).fill(data.address.pincode[0])
        await this.page.locator(this.testDriveCheckbox).click()
        await this.page.locator(this.submitForTestDrive).click()
        await this.page.waitForSelector(this.confirmTestDrive)
        await expect(this.page.locator(this.confirmTestDrive)).toBeVisible()

    }
}

exports.TestDriver = TestDriver 

