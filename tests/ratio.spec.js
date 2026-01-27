import {test, expect} from '@playwright/test';

test("ratiobutton",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const ratiopage = page.locator("//input[@id='male']");
    ratiopage.check();
    await expect(ratiopage).toBeChecked();
})

test("checkbox",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkboxpage = page.locator("//input[@id='monday']");
    await checkboxpage.check();
    await expect(checkboxpage).toBeChecked();

    await page.pause();
})

test("uncheckbox",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const uncheckboxpage = page.locator("//input[@id='monday']");
    await uncheckboxpage.uncheck();
    await expect(uncheckboxpage).not.toBeChecked();
})      
test("multiplecheckbox",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const multiplecheckboxpage = page.locator("//input[@type='checkbox']"); 
    await multiplecheckboxpage.nth(1).check();      
    await multiplecheckboxpage.nth(3).check();
    await expect(multiplecheckboxpage.nth(1)).toBeChecked();
    await expect(multiplecheckboxpage.nth(3)).toBeChecked();
})


test("letcode ration checkbox",async({page})=>{
    await page.goto("https://letcode.in/radio");

    //Select any one radio button
    const ratiobutton=page.locator("//input[@id='yes']");
    await ratiobutton.check();
    await expect(ratiobutton).toBeChecked();
    await expect(page.locator("//input[@id='no']")).not.toBeChecked();

    //Find bug
    const ratiobuttonyes=page.locator("//input[@id='nobug']");
    const ratiobuttonno=page.locator("//input[@id='bug']");
    await ratiobuttonyes.check();
    await ratiobuttonno.check();
    await expect(ratiobuttonno).toBeChecked();
    await expect.soft(ratiobuttonyes).not.toBeChecked();

    //confirm any one is selected
     const ratiobuttonone=page.locator("//input[@id='one']");
    const ratiobuttontwo=page.locator("//input[@id='two']");
    await ratiobuttonone.check();
    await ratiobuttontwo.check();
    await expect(ratiobuttontwo).toBeChecked();
    await expect(ratiobuttonone).not.toBeChecked();

    //Find which one is selected
    const ratiobuttonFOO=page.locator("//input[@id='foo']");
    const ratiobuttonBar=page.locator("//input[@id='bar']");
    await ratiobuttonone.check();
    await ratiobuttontwo.check();
    await expect(ratiobuttontwo).toBeChecked();

    await expect(page.locator("//input[@id='maybe']")).toBeDisabled();

    page.locator("//label[text()=' Remember me ']").click();
    await expect(page.locator("//label[text()=' Remember me ']")).toBeChecked();

     page.locator("//label[text()=' I agree to the ']").click();
    await expect(page.locator("//label[text()=' I agree to the ']")).toBeChecked();

})

test.only("automation practice assertions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const titlepage=page.locator("//h1[@class='title']");
    await expect(titlepage).toHaveText("Automation Testing Practice");
    await expect(titlepage).toHaveAttribute("class","title");
    await expect(titlepage).toContainText("Automation");
    await expect(titlepage).toHaveCount(1);
    await expect(titlepage).toBeVisible();
    await expect(titlepage).toBeEnabled();

    const description=page.locator("//p[@class='description']");
    await expect(description).not.toBeEmpty();  
    await expect(description).toHaveText("For Selenium, Cypress & Playwright"); 

    const nameinput=page.locator("//input[@id='name']");
    //await expect(nameinput).toHaveText("Enter Name");
    await nameinput.fill("Playwright");
    await expect(nameinput).toHaveValue("Playwright");

    await page.waitForTimeout(2000);
    await expect(nameinput).toBeEnabled();
    await expect(nameinput).not.toBeDisabled();
    await expect(nameinput).not.toBeEmpty();
    await expect(nameinput).toBeEditable();
    await nameinput.fill("selenium & pw");
   // await expect(nameinput).toHaveText("selenium & pw");
})