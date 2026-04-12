import { Page  } from "@playwright/test";
import cookiesPage from '../page-elements/cookies-page-elements.json' with { type: 'json' };
import { WebCommons } from '../../commons/ui/web-commons.ts';
import { error } from "node:console";

// This class contains the methods or steps  definitions related to the login page of the application. It uses the locators defined in the login-page-elements.json file and the common methods from the WebCommons class to perform actions on the login page.
export class CookiesPageSteps{

    page: Page;
    web: WebCommons;

    constructor(page:Page){
        this.page = page;
        this.web = new WebCommons(this.page);
    }

    // Method to verify cookies oage is displayed
    async verifyCookiesPageIsDisplayed(){
        await this.web.isElementVisible(cookiesPage.cookiesHeader)

    }

    // method to verify the content of the cookies page
    async verifyCookiesPopUpContent(expectedContent:string){
        await this.web.isElementVisible(cookiesPage.cookiesContent);
        const actualContent = await this.web.getElementText(cookiesPage.cookiesContent);
        await this.web.compareText(actualContent,expectedContent);

    }

     // Method to verify the logos displayed onnthe cookie's pop up
    async veryfyCookiespageLogos(){
        await this.web.isElementVisible(cookiesPage.creatioImgIcon);
        await this.web.isElementVisible(cookiesPage.cookieBot);
    }

    // Method to verify all the selection buttons displayed in the cookies pop up
    async verifycookiesPageSelectionButtons(){
        await this.web.isElementVisible(cookiesPage.allowAllBtn);
        await this.web.isElementVisible(cookiesPage.allowAllSelectionBtn);
        await this.web.isElementVisible(cookiesPage.denyBtn);
    }

    // Method to verify all the switch buttons displayed in the cookies pop up

    async verifyCookiesPageSwitchButtons(){
        await this.web.isElementVisible(cookiesPage.marketingTogleBtn);
        await this.web.isElementVisible(cookiesPage.preferenceTogleBtn);
        await this.web.isElementVisible(cookiesPage.statisticsTogleBtn);
        await this.web.isElementVisible(cookiesPage.necessaryToggleBtn);
    }
   
    // method to verify showdetails link visible in the cookies pop up
    async VerifyShowDetailsLink(){
        await this.web.isElementVisible(cookiesPage.showDetLint);

    }

    // Method to click on the show details link in the cookies's pop up
    async clickOnShowDetailsLink(){
        await this.web.clickElement(cookiesPage.showDetLint);

    }

    // Method to verify the expanded view of the cookies pop up


    // Method to click on specific selection button
    async clickOnSelectionButton(buttonName:string){
        switch(buttonName.toLowerCase()){
            case 'allow all':
                await this.web.clickElement(cookiesPage.allowAllBtn);
                break;

            case 'allow seletion':
                await this.web.clickElement(cookiesPage.allowAllSelectionBtn);
                break;

            case 'deny':
                await this.web.clickElement(cookiesPage.denyBtn);
                break;

            default:
                throw new Error {`Invalid buton name: ${buttonName}`};
        }
    }

    // Method to verify the cookie's pop up is closed

    async verifyCookiesPopUpIsClosed(){
        await this.web.isElementDisappeared(cookiesPage.cookiesHeader);
    }
    

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       