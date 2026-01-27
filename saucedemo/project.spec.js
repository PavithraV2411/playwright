import {test,expect} from '@playwright/test';

test.beforeAll("launching the browser", async ()=>{
    console.log("Testing started");
});

test.afterAll("closing the browser", async ()=>{
    console.log("Testing ended");
});

test.beforeEach("navigating to the url", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    console.log("navigated to the url");
});


test.afterEach("going back to home page", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    console.log("navigated back to home page");
});

test('verify the login functionality with valid credentials', async ({page})=>{
    console.log("Executing valid credentials test");
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
}); 

test('verify the login functionality with invalid credentials', async ({page})=>{
    console.log("Executing invalid credentials test");
    await page.fill('#user-name', 'standard_user1');
    await page.fill('#password', 'secret_sauce1');
    await page.click('#login-button');
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('verify the login functionality with empty credentials', async ({page})=>{
    console.log("Executing empty credentials test");
    await page.click('#login-button');
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username is required');
}); 

test('verify the login functionality with valid username and empty password', async ({page})=>{
    console.log("Executing valid username and empty password test");
    await page.fill('#user-name', 'standard_user');
    await page.click('#login-button');
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Password is required');
});

test('verify the login functionality with empty username and valid password', async ({page})=>{
    console.log("Executing empty username and valid password test");
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username is required');
});

test('verify the login functionality with special characters in username and password', async ({page})=>{
    console.log("Executing special characters in username and password test");
    await page.fill('#user-name', '!@#$%^&*()');
    await page.fill('#password', '!@#$%^&*()'); 
    await page.click('#login-button');
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});
test('verify the login functionality with long strings in username and password', async ({page})=>{
    console.log("Executing long strings in username and password test");
    const longString = 'a'.repeat(1000);    
    await page.fill('#user-name', longString);
    await page.fill('#password', longString);
    await page.click('#login-button');
    const errorMessage = await page.locator('h3[data-test="error"]');
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});


    
    