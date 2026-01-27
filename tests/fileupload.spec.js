import{test,expect} from '@playwright/test';

test("fileupload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/data/Screenshot 2026-01-22 081559.png");
    await page.locator("//button[text()='Upload Single File']").click();
    await expect(page.locator("//p[@id='singleFileStatus']")).toContainText("Single file selected:");

    console.log("file uploaded successfully");
     await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["tests/data/Screenshot 2026-01-22 081559.png", "tests/data/Screenshot 2026-01-22 083916.png"]);

    await page.locator("//button[text()='Upload Multiple Files']").click();

    await page.locator("//input[@id='multipleFilesInput']").setInputFiles([]);
    await page.locator("//button[text()='Upload Multiple Files']").click();

    await page.pause();

})

test.only("filedownload",async({page})=>{
    await page.goto("https://letcode.in/file");

    const [ download ] = await Promise.all([    
        page.waitForEvent('download'),
        await page.locator("//a[@id='pdf']").click()
    ]);     
    // save downloaded file
    await download.saveAs('downloads/sample.txt');
    const path = await download.path();
    console.log(`File downloaded at : ${path}`);
    await page.pause();
})