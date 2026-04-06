// Assignment 3

import {test, expect} from "@playwright/test";

test('Demo QA- Alerts', async ({ page }) =>{

// 1. Enter URL and Launch the application (https://demoqa.com/alerts)
await page.goto('https://demoqa.com/alerts');

// 2. Locate Alert buttons to trigger the alerts
const infoAlertBtn = await page.locator('button#alertButton');
const timerAlertBtn = await page.locator('timerAlertButton');
const confirmtBtn = await page.locator('button#confirmButton');
const promptBtn   = await page.locator('button#promtButton');
console.log('alert buttons located successfully');

// 3. Click on the information alert and copy the alert message and then select OK button
await handleAlert(page, infoAlertBtn, 'Information alert message is : ');

// 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
await handleAlert(page, confirmtBtn, 'Confirmation alert message is : ', 'dismiss');  

// 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
await handleAlert(page, promptBtn, 'Prompt alert message is : ', 'accept', 'Anju');


});

async function handleAlert(
    page: any, 
    btnSelector: any, 
    logPrefix: string, 
    action: 'accept' | 'dismiss' = 'accept', 
    promptText?: string
) {
    page.once('dialog', async (dialog: any) => {
        console.log(`${logPrefix}${dialog.message()}`);

        if (action === 'dismiss') {
            await dialog.dismiss();
        } else {
            await dialog.accept(promptText);
            console.log(`Prompt text entered: ${promptText}`);
        }
    });

    await btnSelector.click();
}
  

// // 3. Click on the information alert and copy the alert message and then select OK button
//   page.once('dialog', async dialog => {

//   //Copy the message from the alert. 
//   const message = dialog.message();
//   console.log ("Information alert message is : " + message);
//   dialog.accept();

// });

// await infoAlertBtn.click();
// console.log('Information alert button clicked and message copied');


// // 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
//   page.once('dialog', async dialog => {

//   const message = dialog.message(); 
//   console.log ("Confirmation alert message is : " + message);
//   dialog.dismiss();
//   console.log('Confirmation alert dismissed');

// });

// await confirmtBtn.click();
// console.log("Clicked on confirmation alert buttn & copied the content");


// // 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
//  page.once('dialog', async dialog => {

//   //Copy the message from the alert. 
//   const message = dialog.message();
//   console.log ("Prompt alert message is : " + message);
//   dialog.accept("Anju");
  

// });

// await promptBtn.click();
// console.log('Prompt button clicked , entered test & closed')

// });





