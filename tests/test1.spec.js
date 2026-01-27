import {test, expect} from '@playwright/test';

test("playwright test", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // const firstname = page.locator("//input[@id='name']");
    // await firstname.fill("Admin");
    // await page.locator("//input[@id='email']").fill("xyz@gmail.com");
    // await page.locator("//textarea[@id='textarea']").fill("This is testing");
    // await page.locator("//input[@id='male']").check();
    // await page.locator("//input[@id='sunday']").check();
    // await page.locator("//input[@id='wednesday']").check();

    await page.getByPlaceholder("Enter Name").fill("admin");
    await page.getByRole('button', { id: "btn2" }).click();
    await page.pause();
})
