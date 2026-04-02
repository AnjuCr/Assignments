
import {test, expect} from "@playwright/test";

test('Creatio-Locators', async ({ page }) => {

    await page.goto("https://accounts.creatio.com/login/alm")

    // Locate Business Email Input field
    await page.locator("//input[@aria-label='Business email']");

    // Locate passqord field
    await page.locator("//input[@type='password']");

    // Locate login button
    await page.locator("//span[text()=' LOG IN ']")

    // Locate forgot password link
    await page.locator("//a[@class='forgot-password-link']");

    // locate password field eye icon
    await page.locator("//mat-icon[@data-mat-icon-name='eye-blue']");

    // locator linkedin icon
    await page.locator("//img[@class='icon-LinkedIn']");

    // locator google icon
    await page.locator("//img[@class='icon-google']");

    //locator cookiebot link
    await page.locator("//div[@id='CybotCookiebotDialogHeaderLogosWrapper']//a[@rel='noopener nofollow']");

    // locator for the text content
    await page.locator("//span[contains(text(), 'We may use cookies and similar technologies')]");

    // locator Allow all button
    await page.locator("//button[text() = 'Allow all']");

    // locator Allo Selection
    await page.locator("//button[text() = 'Allow selection']");

    // locator deny button
    await page.locator("//button[text() = 'Deny']");

    // locator Necessary label
    await page.locator("//strong[text() = 'Necessary '] ");

    // locator preference label
    await page.locator("//strong[text() = 'Preferences '] ");

    // locator statistics label
    await page.locator("//strong[text() = 'Statistics ']");

    // locating marketing label
    await page.locator("//strong[text() = 'Marketing ']");

    // prference toggle button
    await page.locator("//input[@id='CybotCookiebotDialogBodyLevelButtonPreferences']");

    // statistics toggle button
    await page.locator("//input[@id='CybotCookiebotDialogBodyLevelButtonStatistics']");

    // marketing toggle button
    await page.locator("//input[@id='CybotCookiebotDialogBodyLevelButtonMarketing']");

    // locator show more link
    await page.locator("//a[text()='Show details']");

});