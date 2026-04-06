	
// Assignment - 2



import { test,expect } from "@playwright/test";

test ('Demo QA Automation - Practice Form', async ({page}) => {

// 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
await page.goto("https://demoqa.com/automation-practice-form");

// 2. Wait for Page-load
const registrationHeader = await page.locator("//h5[text() ='Student Registration Form']");
await expect(registrationHeader).toBeVisible();
console.log("Practice form loaded successfully");

// 3. Enter First name and Last name
const firstName = await page.locator("input#firstName");
const lastName  = await page.locator("input#lastName");
await firstName.clear();
await firstName.fill('Anju');
await lastName.clear();
await lastName.fill('Reghunadhan');
console.log("Entered first name & last name");

// 4. Enter Email
const email =await page.locator('input#userEmail');
await email.clear();
await email.fill('anju@yopmail.com');
console.log("Email entered successfully");

// 5. Select Gender (Male)
await selectGender(page, "Female");

// 6. Enter mobile number
const mobNumber = await page.locator('input#userNumber');
await mobNumber.clear();
await mobNumber.fill('8606880343');
console.log('The mobile number entered sucsessfully');
    
// 7.Select DOB (1-Feb-1991)
const dob = await page.locator('input#dateOfBirthInput');
// // dob.clear();
// dob.fill('01 Feb 2026');
// const dobMonthSelector = await page.locator('select.react-datepicker__month-select')
// await dobMonthSelector.selectOption('1');
// const dobYearSelector = await page.locator('select.react-datepicker__year-select');
// await dobYearSelector.selectOption('1991');
// console.log('Dob Entered successfully');

// 8.Search and Select Computer Science and English
const subjects = await page.locator('div#react-select-2-placeholder');
await subjects.clear();
await subjects.fill('Computer Science');
await subjects.press('Enter');

// 9.Select Hobbies as Sports and Reading
await selectHobbies(page, ['hobbies-checkbox-1', 'hobbies-checkbox-3']);

// 10.Upload photo
const uploadBtn = await page.locator('input#uploadPicture');
uploadBtn.click();
await uploadBtn.setInputFiles('C:\Users\ASUS VIVIBOOK\Desktop\Personal\Ramakalmedu');
console.log('file uploaded successfully');

// 11.Submit Details
const submitBtn = await page.locator('button#submit');
submitBtn.click();
console.log('Details submitted successfukky');

});

async function selectGender(page:any, gender:string) {
    const genderOption = await page.locator(`input[value="${gender}"]`);
    await genderOption.click();
    console.log(`The ${gender}selected from radio options`);
}
async function selectHobbies(page:any,hobbies:string[]) {
    for(const hobby of hobbies){
        const hobbyOption = await page.locator(`input#${[]}`)
        console.log(`The hobby "${hobby}" has been selected.`);
    }
    
}



// 11.Submit Details

