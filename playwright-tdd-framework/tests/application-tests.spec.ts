import {test, expect, TestInfo} from '@playwright/test';
import { LoginPageSteps } from '../page-objects/page-steps/login-page-steps.ts';
import { HomePageSteps } from '../page-objects/page-steps/home-page-steps.ts';
import { CookiesPageSteps } from '../page-objects/page-steps/cookies-page-steps.ts';
import data from '../testdata/ui/data.json' with {type: 'json'};

let loginPage: LoginPageSteps;
let homePage: HomePageSteps;
let cookiesPage: CookiesPageSteps;
let testData: any;

test.describe('UI Application Tests', () =>{
    
    // Initializing the page objects before each test
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPageSteps(page);
        homePage  = new HomePageSteps(page);
        cookiesPage= new CookiesPageSteps(page);
    })

    // Test Case 1: Verfy cookies page is displayed
    test('TC01: Verify Cookies Page is Displayed', async () =>{
        await loginPage.launchApplication();
        await loginPage.verifyLoginPageIsDisplayed();
        
    });


    // Test Case 2: Verify cookies pop up content

    // test('TC02: Verify Cookies Pop Up Content', async () =>{
    //     testData = data["TC02: Verify Cookies Pop Up Content"]
    //     await loginPage.launchApplication();
    //     await loginPage.verifyLoginPageIsDisplayed();
    //     await cookiesPage.verifyCookiesPopUpContent(testData.content);
    // });

     test('TC02: Verify Cookies Pop Up Content', async ({}, testInfo: TestInfo) =>{
        testData = data[testInfo.title as keyof typeof data]
        await loginPage.launchApplication();
        await loginPage.verifyLoginPageIsDisplayed();
        await cookiesPage.verifyCookiesPopUpContent(testData.content);
    });
    
    // Tes case 3: verify the logos displayed in the cookies page
    test('TC03: Verify the logos displayed in the cookies page', async () =>{
        await loginPage.launchApplication();
        await loginPage.verifyLoginPageIsDisplayed();
        await cookiesPage.veryfyCookiespageLogos();
    });




})