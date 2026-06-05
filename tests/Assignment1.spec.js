const {test,expect}=require('@playwright/test');
const {loginFunction}=require('../tests/Auth');


test.skip('Register',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //locators
    const register_btn_click=page.locator("a.btn1");
    const first_name=page.locator("input#firstName");
    const last_name=page.locator("input#lastName");
    const email=page.locator("input#userEmail");
    const phone=page.locator("input#userMobile");
    //const occupation=page.locator(".custom-select.ng-pristine.ng-valid.ng-touched");
    const password=page.locator("input#userPassword");
    const confirm_password=page.locator("input#confirmPassword");
    const register_login=page.locator("input#login");

    //await page.waitForSelector('h1.headcolor');
    const reg = page.locator('h1.headcolor').filter({hasText: 'Account Created Successfully'});
    //console.log(reg)
    //await expect(reg).toBeVisible();



    //Actions method
    await register_btn_click.click();
    //await page.waitForTimeout(5000);
    await first_name.fill("Sohit");
    await last_name.fill("Patel");
    await email.fill("sohitSir.patel@gmail.com");
    await phone.fill("9889896673")
    //await occupation.selectOption("Engineer");
    await password.fill("sohitsir@123");
    await confirm_password.fill("sohitsir@123");
    await register_login.click();
    //console.log('Registered',await reg.innerText());
   //await expect(await reg).toBeVisible();
   // Change this in your test




    // await page.waitForTimeout(5000);
      
})

test.skip('Login',async({page})=>{
    await loginFunction(page);
    // await page.waitForTimeout(5000);
})

