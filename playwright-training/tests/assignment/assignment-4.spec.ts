	
	
// Assignment -4 

// 1. Enter URL and Launch the application (https://demoqa.com/frames)

import { test, expect } from "@playwright/test";
test('Demo QA- Frames', async ({ page }) => {
await page.goto('https://demoqa.com/frames');
console.log('Frames page loaded successfully');

// 2. Locate Main window element
const mainHeader = page.locator('h1.text-center');

// Locate the frame and store in the variable
const frameOne = await page.frameLocator('iframe#frame1');
console.log('Frame One located successfully');

const frameTwoElement = await page.frameLocator('iframe#frame2');
console.log('Frame Two located successfully');

// 3. Locate Frame Element

const frameOneElement = await frameOne.locator('h1#sampleHeading');

// 4. Copy and Print text from frame element

let frameOneText = await frameOneElement.textContent();
console.log('Text from frame one is : ' + frameOneText);

// 5. Copy and Print text from main window element
let mainHeaderText = await mainHeader.textContent();
console.log('Text from main header is : ' + mainHeaderText);

}); 