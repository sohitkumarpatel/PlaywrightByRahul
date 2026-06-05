//import {test,expect} from '@playwright/test';
const { test,expect} = require('@playwright/test');

/*
test("Browser context test",async ({browser})=>{
    chrome ->Plugins/cookies

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com");
    
} );
 */

test.skip('My first test',async({page})=>{
    await page.goto("https://www.google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});
/*
    if id is present
        css-> tagname#id (or) #id
    if class attribute is present
        css->tagname.class (or) .class
    write css based on any attribute
        css ->[attribute='value']
    write css with traversing from parent to child
        css-> partenttagname>>childtagname
    If need to write locator based on text
    text=''

*/

test('Login page',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //Locatore of the page
     const username= page.locator("#username");
     const password=page.locator("#password");
     const signbutton=page.locator("#signInBtn")
     const card=page.locator(".card-body a");
    //  const cardphone=page.locator(".card-body a text=('iphone X')");
    //fill - enter into boxes
    //await page.locator("#username").fill("SohitPatel");
    //await page.locator("#password").fill("sohit@123");
    //await page.waitForTimeout(5000);
    //await page.locator("#signInBtn").click();
    //console.log(await page.locator("[style*='block']").textContent());

   

    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signbutton.click();

    //const card = page.locator('.card-body').filter({has: page.locator('a'), hasText:'abcd'})
    //await expect(card).toBeVisible();
    //await page.waitForTimeout(5000);

    //console.log(await card.first().textContent());
    //console.log(await card.nth(1).textContent());
    //console.log(await card.last().textContent());
    console.log(await card.allTextContents());

    const iphonetext=card.first().textContent();

    const arr = await card.allTextContents();

    for(let i=0; i<arr.length; i++){
        if(arr[i]=="Blackberry"){
            console.log("WAAAAAAH")
        }
    }


    await expect(await card.nth(0)).toContainText('iphone X');
    
    
});