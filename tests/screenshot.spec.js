import{test,expect} from '@playwright/test';

test("fileupload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.screenshot({path:'tests/screenshots/screenshot1.png'});
    await page.screenshot({path:'tests/screenshots/screenshot2.png',fullPage:true});
    await page.locator("//input[@id='singleFileInput']").setInputFiles({path:'tests/screenshots/screenshot1.png'});
})