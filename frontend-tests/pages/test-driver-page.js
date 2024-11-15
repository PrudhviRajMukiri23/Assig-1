const { TEST_DRIVE_URL } = require("../utils/constants")
const {expect} = require('@playwright/test')

class TestDriver {
    constructor(page) {
        this.page = page
        this.url = TEST_DRIVE_URL
        this.carDropdown = "//div[@class='css-1kt83gu']/span"
        this.car1 = "//*[@id='dropdown-field-:Rlb3albn9aj5:-list-1']"
        this.car2 = "//*[@id='dropdown-field-:Rlb3albn9aj5:-list-2']"
        this.firstName = "//input[@name='firstName']"
        this.lastName = "//input[@name='lastName']"
        this.lastNameValidationErrorMessage = "//div[@id='text-field-:R553albn9aj5:-message']"
        this.emailvalue = "//input[@name='email']"
        this.zipcode = "//input[@name='zipCode']"
    }

    async selectDifferentValuesInDropdown(data) {
        await this.page.goto(this.url)
        await this.page.locator(this.carDropdown).click()
        await this.page.locator(this.car1).click()
        await this.page.locator(this.car2).click()
        await this.page.waitForTimeout(2000)

        await this.page.locator(this.firstName).fill(data.firstname)
        await this.page.keyboard.press("Control+A")
        await this.page.keyboard.press("Control+C")
        await this.page.keyboard.press("Backspace")
        await this.page.keyboard.press("Control+v")
        await this.page.waitForTimeout(2000)

        await this.page.locator(this.lastName).focus()
        await this.page.keyboard.type(data.lastname)
        await this.page.keyboard.down("Shift")
        for(let i=0;i<=2;i++){
            await this.page.keyboard.press("ArrowLeft")
        }
        await this.page.keyboard.up("Shift")
        await this.page.keyboard.press("Backspace")
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(2000)

        await expect(await this.page.locator(this.lastNameValidationErrorMessage)).toBeVisible();

        await this.page.locator(this.emailvalue).fill(data.address.email)
        await this.page.locator(this.zipcode).fill(data.address.pincode[0])
        await this.page.waitForTimeout(2000)

    }
}

exports.TestDriver = TestDriver 

