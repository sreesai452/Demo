import { browser, by, element } from "protractor";
import { elementHelper } from "../e2e-utilities/element-helper";
import {elementquries} from "../e2e-utilities/constants";
import { By } from "webdriver-js-extender/node_modules/@types/selenium-webdriver";
export class signinpage{

   
    public async clickonsignin(): Promise<void> {
       const ElementHelper= new elementHelper();
       ElementHelper.click(element(by.buttonText('submit')));
        
    }
    public async openUrl(): Promise<void> {        
        browser.get(elementquries.broswerurl);
     }

}


