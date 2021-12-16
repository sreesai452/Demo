import { browser, ElementFinder, until } from 'protractor';
import { log } from './e2e-log';

export class elementHelper{

    private alertWaitTimeout=300000;
    private ec=browser.ExpectedConditions;
    public async click(element: ElementFinder){
        try{      
       await browser.wait(this.ec.elementToBeClickable(element), this.alertWaitTimeout)
         await element.click();
            }
            catch (ex) {
            await log('timed out waiting for hover and click. Retrying...');
                await browser.driver.findElement(element).click();
            }
    }
    public async assertText(element: ElementFinder, expectedText: string) {
        await browser.wait(until.elementIsVisible(element), this.alertWaitTimeout)
        let actualText = await element.getText();
        expect(actualText.trim()).toBe(expectedText);
    }

}