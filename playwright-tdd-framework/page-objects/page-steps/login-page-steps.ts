import { Page  } from "@playwright/test";
import loginPage from '../page-elements/login-page-elements.json' with { type: 'json' };
 import { WebCommons } from '../../commons/ui/web-commons.ts';
import config from '../../config/config.json' with { type: 'json' };

// This class contains the methods or steps  definitions related to the login page of the application. It uses the locators defined in the login-page-elements.json file and the common methods from the WebCommons class to perform actions on the login page.
export class LoginPageSteps{

    page: Page;
    web: WebCommons;

    constructor(page:Page){
        this.page = page;
        this.web = new WebCommons(this.page);
    }

    // Method to launch the application
    async launchApplication(): Promise<void>{
        await this.web.launchApplication(config.app.url, config.app.title);

    }

    // Method to verify login page is displayed
    async verifyLoginPageIsDisplayed():Promise<void>{
        await this.web.isElementVisible(loginPage.lgnFomHeader);

    }

    // Method to enter username & password
    async enterUsernameAndPassword(username:string, password:string): Promise<void>{
     await this.web.enterText(loginPage.businessEmail,username)
     await this.web.enterText(loginPage.password, password);
    }

    //Method to click on login button

    async clickOnLoginButton():Promise<void>{
        await this.web.clickElement(loginPage.loginBtn);
    }

    // Method to verify the forgot password link is visible

    async verifyForgotPasswordLinkIsDisplayed():Promise<void>{
        await this.web.isElementVisible(loginPage.forgotPswdlnk);

    }

    // Method to verify the forgot password link is clickable

    async clickOnForgotPasswordLink():Promise<void>{
        await this.web.clickElement(loginPage.forgotPswdlnk);
    }
    
    // Method to verify Verify forgot Passwor dConfirmation Message
    async verifyForgotPasswordConfirmationMessage():Promise<void>{
        await this.web.isElementVisible(loginPage.forgotPswdConfirmationMsg);
    }

    // Method to verify socialmedia login icons

    async verifysocialMediaIcons(): Promise<void>{
        await this.web.isElementVisible(loginPage.iconGoogle);
        await this.web.isElementVisible(loginPage.iconLinkdIn);
    }

    // Method to verify login error message

    
    // Method to verify the signup link is visible 
    async verifySignupLinkIsVisible():Promise<void>{
        await this.web.isElementVisible(loginPage.signUpLink);
    }

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       