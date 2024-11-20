class CookieeActions {

    constructor(){
        this.dialogAccept="//button[text()='Accept all']"
    }

     async cookieAccept(page){
        await page.waitForTimeout(4000)
        await page.locator(this.dialogAccept).click()
        await page.waitForTimeout(2000)
    }

}

exports.CookieeActions = CookieeActions