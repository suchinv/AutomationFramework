import { test, expect } from '@playwright/test';
const { pageLogin } = require('../swagLabs/page_login');
const { pageInventory } = require('../swagLabs/page_inventory');
const { pageCart } = require('../swagLabs/page_cart');
test('test', async ({ page }) => {
    const login = new pageLogin(page);
    const invent = new pageInventory(page);
    const cart = new pageCart(page);

    await login.gotoApp();
    await login.enterPassword();
    await login.enterPassword();
    await login.userClickLoginbtn();
    await invent.userSelectProduct1();
    await cart.userClickOnCart();
    await cart.userRemoveProduct();
    await cart.userVerifyProductRemoved();
    await cart.userVerifyCartCount(0);

    // await page.goto('https://www.saucedemo.com/v1/');
    // await page.getByPlaceholder('Username').fill('standard_user');
    // await page.getByPlaceholder('Password').fill('secret_sauce');
    // const loginButton=page.getByRole('button',{name:'LOGIN'});
    // await loginButton.click();
    // const item=page.getByRole('link',{name:'Sauce Labs Bolt T-Shirt'});
    // await item.click();
    // await page.getByRole('button',{name:'ADD TO CART'}).click();
    // await page.locator('#shopping_cart_container').getByRole('link').click();
    // await page.getByRole('button',{name:'REMOVE'}).click();
    // await expect(item).toBeHidden();
    // await expect(page.locator('.cart_quantity')).toHaveCount(0);
    

});