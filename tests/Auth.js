// const {test,expect} = require('@playwright/test');
export const loginFunction = async (page)=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //locator
    const register_btn_click=page.locator("a.btn1");
    await page.locator("#userEmail").fill("sohit.patel@gmail.com");
    await page.locator("#userPassword").fill("Sohit@123");
    await page.locator("#login").click(); 
    await page.waitForTimeout(5000);
   
}
