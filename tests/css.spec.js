import {test,expect}    from '@playwright/test';    

test("cssselector",async ({page})=>{
    await page.goto("https://www.facebook.com/");
    const emailpage=page.locator("/html/body/div/div/div/div/div/div/div/div/div/div/div/div/div/div/form/div[1]/div[1]/div/input");
    await emailpage.fill("admin@gmail.com");
    const password=page.locator("[type='password']");
    await password.fill("admin@123");
    const login=page.locator("[name='login']");
    await login.click();
})
