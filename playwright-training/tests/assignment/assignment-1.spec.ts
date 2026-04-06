	
// Assignment - 1
import {test, expect} from "@playwright/test";

test('Para Bank Automation', async ({ page }) =>{

// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)

await page.goto("https://parabank.parasoft.com/parabank/index.htm");


// 2.verify application logo is displayed

const logo = await page.locator('img.logo');
await expect(logo).toBeVisible();
console.log("Logo image is visible");

// 3.Verify application caption displayed as "Experience the difference"

const caption = await page.locator('p.caption');
// or const caption = await page.locator("//p[@class='caption']");
const expCaption = "Experience the difference";
const ActualCaption = await caption.textContent();
await expect(ActualCaption).toBe(expCaption);
console.log("caption is displayed as expected");

// 4.Enter invalid username

const uname = await page.locator("input[name='username']")
await uname.clear();
await uname.fill('Invalid Username');

// 5.Enter empty Password

const password = await page.locator("input[name='password']");
await password.clear();
await password.fill('');
console.log("Entered invalid user name & Empty password");

// 6.Click on login button

const login =await page.locator("input[value='Log In']");
login.click();
console.log("Login button clicked successfully");

// 7.Verify the error message "Please enter a username and password."
const errorMsg = await page.locator("p[class='error']");
const expMsg   = "Please enter a username and password.";
const actualMsg = await errorMsg.textContent();
await expect(actualMsg).toBe(expMsg);
console.log("Error message is showing as expected");

// 8.Click on admin page link
const adminPage = await page.locator("ul[class='leftmenu']>li>a[href='admin.htm']");
await adminPage.click();
console.log("Clicked on the Admin page link successfully");

// 9.select the option "soap" from dba mode radio button
// Need to create a seperate function for this
await selectDbaMode(page, "jdbc");

// 10.Scroll to element dropdown
const lonPrvdDropdown = await page.locator('select#loanProvider');
// const lonPrvdDropdown = await page.locator("select[id='loanProvider']");
await lonPrvdDropdown.scrollIntoViewIfNeeded();
lonPrvdDropdown.click();
console.log("Scrolled to the loan provider dropdown successfully");

// 11.Select the option web service from the dropdown
await lonPrvdDropdown.selectOption({label:'Web Service'});
console.log("Selected the option 'Web Service' from the dropdown");

/// 12.click on submit button
const submitButton = await page.locator('input[value="Submit"]');
await submitButton.click();

// 13.verify submission is successful by validating success message
const successMessage = await page.locator('//div[@id="rightPanel"]//p//b');
const expectedMessage = "Settings saved successfully.";
const actualMessage =await successMessage.textContent();
await expect(actualMessage).toBe(expectedMessage);
console.log("Submission is successful and expected message is displayed. ")

// 14.Click on services page link
const servicePge =  await page.locator("ul[class='leftmenu'] > li > a[href='services.htm']");
await servicePge.click();
console.log("Clicked on the services page link successfully.")

 // 15.wait for service page
 const bookStoreHeader = await page.locator("//span[text() ='Bookstore services:']");
 await expect (bookStoreHeader).toBeVisible();
 console.log("Book Store service header & services page is loaded successfully");

// 16.Scroll down till bookstore services table

await bookStoreHeader.scrollIntoViewIfNeeded();
console.log("Scrolled down till bookstore services table successfully.");

// 17.get total rows of books store services table

const rows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
const totalRows = await rows.count();
console.log(`Total number of row in the table is ${totalRows}`);

 // 18.get total columns of books store services table

const columns = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]//td');
const totalColumns =await columns.count();
console.log(`Total number of columns in the table is ${totalColumns}`);

// 19.Print table data (row wise and column wise data)

for (let r:number =1; r<=totalRows; r++){
    for(let c: number=1; c<=totalColumns; c++){
      const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[${r}]//td[${c}]`);
      console.log(`Row ${r} Column ${c} value is : `+await cell.textContent());

    }

}

});

async function selectDbaMode(page:any, mode:string) {
    const dbamodeRadioBtn = await page.locator(`input[value =${mode}]`);
    dbamodeRadioBtn.click();
    console.log(`Selected option ${mode} from dba mode radio button successfully`);
    
}

// 17.get total rows of books store services table
// 18.get total columns of books store services table
// 19.Print table data (row wise and column wise data)