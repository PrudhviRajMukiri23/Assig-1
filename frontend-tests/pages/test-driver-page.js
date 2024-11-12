const { TEST_DRIVE_URL } = require("../utils/constants")

class TestDriver {
    constructor(page) {
        this.page = page
        this.url = TEST_DRIVE_URL
        this.carDropdown = "//div[@class='css-1kt83gu']/span"
        this.car1 = "//*[@id='dropdown-field-:Rlb3albn9aj5:-list-1']"
        this.car2 = "//*[@id='dropdown-field-:Rlb3albn9aj5:-list-2']"
    }

    async selectDifferentValuesInDropdown() {
        await this.page.goto(this.url)
        await this.page.locator(this.carDropdown).click()
        await this.page.locator(this.car1).click()
        await this.page.locator(this.car2).click()
        await this.page.waitForTimeout(3000)
    }
}

exports.TestDriver = TestDriver 

