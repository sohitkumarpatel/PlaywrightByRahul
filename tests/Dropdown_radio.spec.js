const {test,expect} = require('@playwright/test');

test("Login to page and validate the dropdown and radio button",async({page})=>{
    
    //load the page
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // locator og lofin page
    const username=page.locator("#username");
    const password=page.locator("#password");
    const radio_btn=page.locator('input[type="radio"][value="user"]');
    const dropdown =page.locator("select.form-control");
    const popup=page.locator("#okayBtn");
    const checkbox=page.locator("#terms");
    
    //Actions method
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await radio_btn.check();
    await popup.click();
    await page.waitForTimeout(5000);
    await dropdown.selectOption("consult");
    console.log("Radio button check",await radio_btn.isChecked());
    expect(await radio_btn).toBeChecked();

    await checkbox.check();
    expect(await checkbox).toBeChecked();
    await page.waitForTimeout(5000);
    await checkbox.uncheck();
    expect(await checkbox.isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);

    
    //await page.pause();

})