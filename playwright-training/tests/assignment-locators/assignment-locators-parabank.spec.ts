
import { test, expect } from '@playwright/test';

test('Para-Bank -Selectors', async ({page}) => {

    // Launch the application
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    
    // Locate the About Us menu

    await page.locator("ul[class='leftmenu'] > li > a[href='about.htm']");
    
    // Locate the Service menu
    await page.locator("ul[class='leftmenu'] > li > a[href='services.htm']");

    // Locate the product menu
    await page.locator("ul[class='leftmenu']>li>a[href*='products']");

    // Locate the locations menu
    await page.locator("ul[class='leftmenu']>li>a[href*='contacts']");

    // Lcate the Admin Page menu
    await page.locator("ul[class='leftmenu']>li>a[href='admin.htm']");

    // locate username field
    await page.locator("input[name='username']");

    // locate the password field
    await page.locator("input[name='password']");

    // locate log In button
    await page.locator("input[value='Log In']");

    // locate the Forgot Login Info Link
    await page.locator("a[href='lookup.htm']");

    // Locate the Register link
    await page.locator("div[id='loginPanel'] > p >a[href='register.htm']");

    // Locate the home icon
    await page.locator("ul[class='button'] >li> a[href='index.htm']");

    // Locate About Us icon
    await page.locator("li[class='aboutus']");

    // Locate contact icon
    await page.locator("li[class='contact']");

    //Locate Withdraw funds link
    await page.locator("//a[text()='Withdraw Funds']");

    // locate transfer funds
    await page.locator("//ul[@class='services']/li/a[text()='Transfer Funds']");

    // locate check balance
    await page.locator("//a[contains(text(),'Check Balances')]");

    // locate make deposits
    await page.locator("//a[contains(text(),'Make Deposits')]");

    // locate Bill pay
    await page.locator("//a[text()='Bill Pay']");

    // locate Account History
    await page.locator("//a[text()='Account History']");

    // locate Transfer funds
    await page.locator("//ul[@class='servicestwo']//a[text()='Transfer Funds']")

    // Locate Read More button
    await page.locator("p[class='more']>a[href='services.htm']");

    //Locate link ParaBank Is Now Re-Opened
    await page.locator("//a[text()='ParaBank Is Now Re-Opened']");

    // locate link New! Online Bill Pay
    await page.locator("//a[text()='New! Online Bill Pay']");

    // locate link New! Online Account Transfers
    await page.locator("//a[text()='New! Online Account Transfers']");

    // locate Read More
    await page.locator("p[class='more']>a[href='news.htm']");

    // Footer Home link locator
    await page.locator("div[id='footerPanel'] >ul >li> a[href='index.htm']");

    // Footer About Us
    await page.locator("div[id='footerPanel'] >ul >li> a[href='about.htm']");

    // Footer Services 
    await page.locator("div[id='footerPanel'] >ul >li> a[href='services.htm']");

    // Footer Products
    await page.locator("div[id='footerPanel'] >ul >li> a[href='http://www.parasoft.com/jsp/products.jsp']");

    // Sitemap link
    await page.locator("a[href='sitemap.htm']");

    // Footer Locations
    await page.locator("div[id='footerPanel'] >ul >li> a[href*='contacts']");

    // Forum
    await page.locator("//a[text()='Forum']");
    
    // footer visit link

    await page.locator("ul[class='visit']> li>a[target='_blank']");

     

});