import { test, expect } from '@playwright/test';
const { pageLogin } = require('../swagLabs/page_login');
const { pageInventory } = require('../swagLabs/page_inventory');
const { pageCart } = require('../swagLabs/page_cart');
const { pageCheckout } = require('../swagLabs/page_checkout');
const productData1  = require('../testData/productData.json');
//const loginData = require('../testData/loginData.json');

//const tc1 = require('../testData/tc1.json');
productData1.forEach((testData) => {
test('test', async ({ page }) => {
    const login = new pageLogin(page);
    const invent = new pageInventory(page);
    const chekout = new pageCheckout(page);
    const cart = new pageCart(page);
//const userType = testData.user;
//const userName = loginData[userType+"UserName"]
//const password = loginData[userType+"Password"]
    await login.gotoApp();
    await login.enterUserName(testData.standardUserName);
    await login.enterPassword(testData.standardPassword);
    await login.userClickLoginbtn();
    await invent.userSelectProductByName(testData.product1);
    await cart.userClickOnCart();
    await chekout.userClickOnCheckout();
    await chekout.userProvideCheckoutInfrmtion(testData);
    await chekout.userVerifyOrderMsg();

    // await page.goto('https://www.saucedemo.com/v1/');
    // await page.getByPlaceholder('Username').fill('standard_user');
    // await page.getByPlaceholder('Password').fill('secret_sauce');
    // const loginButton=page.getByRole('button',{name:'LOGIN'});
    // await loginButton.click();
    // await page.getByRole('link',{name:'Sauce Labs Bolt T-Shirt'}).click();
    // await page.getByRole('button',{name:'ADD TO CART'}).click();
    // await page.locator('#shopping_cart_container').getByRole('link').click();
    // await page.getByText('CHECKOUT').click();
    // await page.getByPlaceholder('First Name').fill('John');
    // await page.getByPlaceholder('Last Name').fill('Rodh');
    // await page.getByPlaceholder('Zip/Postal Code').fill('500090');
    // await page.getByRole('button', { name: 'CONTINUE' }).click();
    // await page.getByText('FINISH').click();
    // const ordermsg=page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })
    // await expect(ordermsg).toBeVisible();
    


    
})});