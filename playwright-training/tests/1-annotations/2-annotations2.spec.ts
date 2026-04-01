import {test, expect} from '@playwright/test';

test.skip('Test Case 1- Skip', async ({}) => {
  console.log('Test Case 1- Skip');
});

test('Test Case 2- Fixme', async ({}) => {
  console.log('Test Case 2');
});

test('Test Case 3', async ({}) => {
  console.log('Test Case 3');
});