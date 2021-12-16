//import { browser } from 'protractor';
//import { log } from '../base/e2e-log'
import { browser } from "protractor";

//import {signinpage} from "../pages/signupPage"
fdescribe('getTitle', () => {
    beforeAll(async() =>{
        console.log("******************************************spec1");
    })   
    it("add login1",async ()=>{
        //browser.params.Env
       // browser.get(browser.params.env);
      await  browser.get("https://letcode.in/");
      console.log("******************************************spec1");
      await browser.sleep(3000);
      //await browser.close();
       //await browser.waitForAngularEnabled(false);
       // console.log("spec1");
     // await  browser.sleep(5000);
      //await  browser.quit();
       // log("open url ......................");
       //const signin= new signinpage();
       // signin.openUrl();
       // browser.sleep(5000);
    }
    )
});
