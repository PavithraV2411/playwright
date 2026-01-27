import {test, expect} from '@playwright/test';

test("keyboardmouse", async ({page}) => {
    await page.goto("https://gotranscript.com/text-compare");
    await page.locator("//textarea[@name='text1']").fill("Hello World");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await expect(page.locator("//textarea[@name='text2']")).toHaveValue("Hello World");
    await page.locator("//button[text()='Compare!']").click();

    await page.pause();
})

test.only("mouseactions", async ({page}) => {
    //hover
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[@class='dropbtn']").hover();
    await page.pause();
//double click
    await page.locator("//input[@id='field1']").fill("Hello");
    await page.locator("//button[text()='Copy Text']").dblclick()
    await expect(page.locator("//input[@id='field2']")).toHaveValue("Hello");

    //wheel
    await page.mouse.wheel(0, 500);
    await page.locator("//button[text()='Copy Text']").scrollIntoViewIfNeeded();
    await page.pause();


})

test("rightclick", async ({page}) => {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    await page.locator("//span[text()='right click me']").click({button:'right'});
    await page.pause();
})