import { Page  } from "@playwright/test";
import homePage from '../page-elements/home-page-elements.json' with { type: 'json' };
import { WebCommons } from '../../commons/ui/web-commons.ts';


// This class contains the methods or steps  definitions related to the login page of the application. It uses the locators defined in the login-page-elements.json file and the common methods from the WebCommons class to perform actions on the login page.
export class HomePageSteps{

    page: Page;
    web: WebCommons;

    constructor(page:Page){
        this.page = page;
        this.web = new WebCommons(this.page);
    }

    // Method to verify cookies oage is displayed
    async verifyHomePageIsDisplayed(){
        await this.web.isElementVisible(homePage.homePageHeaderlink);

    }

    //  Method to click on the profile icon  
    async clickOnProfileicon():Promise<void>{
            await this.web.isElementVisible(homePage.ptofileLink);
    }

    // Method to click on the logout button
    async clickOnLogoutButton():Promise<void>{
        await this.web.clickElement(homePage.logoutLink);
    }
}