	
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
await selectDOB(page, "1", "February", "1991");

// 8.Search and Select 'Computer Science' and 'English'
const subjects: string[] = ["Computer Science", "English"];
await selectSubjects(page, subjects);

// 9.Select Hobbies as Sports and Reading
const hobbies: string[] = ["Sports", "Reading"];
await selectHobbies(page, hobbies);

// 10.Upload photo
const uploadPhoto = page.locator('input#uploadPicture');
const filePath = "files/photo.png";
await uploadPhoto.setInputFiles(filePath);

//11. Select state
const stateListbox = page.locator('input#react-select-3-input');
await stateListbox.fill('Rajasthan');
await stateListbox.press('Enter');

//12 .Submit Details
const submitButton = page.locator('button#submit');
submitButton.click();


});

async function selectDOB(page:any, date:string, month:string, year:string) {

    // Launch the calender
    const calender = await page.locator('input#dateOfBirthInput');
    await calender.click();

    // Select month and year
    const monthSelector = await page.locator('select.react-datepicker__month-select');
    await monthSelector.selectOption({ label: month });
    const yearSelector = await page.locator('select.react-datepicker__year-select');
    await yearSelector.selectOption({ label: year });

    // Select date
    const dateElement = page.locator(`//div[text()="${date}" and contains(@aria-label,"${month}")]`);
    await dateElement.click();
}


async function selectGender(page:any, gender:string) {
    const genderOption = await page.locator(`input[value="${gender}"]`);
    await genderOption.check();
    console.log(`The ${gender}selected from radio options`);
}


async function selectHobbies(page: any, hobbies: string[]) {

    for (let hobby of hobbies) {
        const hobbyCheckbox = page.locator(`//label[text()="${hobby}"]/preceding-sibling::input`);
        await hobbyCheckbox.check();
    }

}

async function selectSubjects(page: any, subjects: string[]) {

    //Locate the subject input box and click on it
    const subjectContainer = page.locator('div[class *="subjects-auto-complete__input-container"]');
    await subjectContainer.click();

    //Locate the subject input internal container
    const subjectInput = page.locator('input#subjectsInput');

    //Select the subjects
    for (let subject of subjects) {

        //fill the subject
        await subjectInput.fill(subject);

        //press 'Enter' button
        await subjectInput.press('Enter');

    }
}




// 11.Submit Details

