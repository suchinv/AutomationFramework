import { test, expect } from '@playwright/test';
import { timeout } from '../playwright.config';
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
    await invent.userSelectProduct2();
    await invent.userSelectProduct3();
    await cart.userClickOnCart();
    await cart.userRemoveProduct();
    await cart.userVerifyProductRemoved();
    await cart.userVerifyCartCount(2);


//     await page.goto('https://www.saucedemo.com/v1/');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     const loginButton=page.getByRole('button',{name:'LOGIN'});
//     await loginButton.click();
//     const item1=page.locator(".inventory_item").filter({hasText:'Sauce Labs Bike Light'});
//     const item2=page.locator(".inventory_item").filter({hasText:'Sauce Labs Onesie'});
//     const item3=page.locator(".inventory_item").filter({hasText:'Sauce Labs Backpack'});
//     const removeProduct1=page.locator(".cart_item").filter({hasText:'Sauce Labs Bike Light'});
//    await item1.getByRole('button',{name:'ADD TO CART'}).click();
//    await item2.getByRole('button',{name:'ADD TO CART'}).click();
//    await item3.getByRole('button',{name:'ADD TO CART'}).click();
   
       
//    await page.locator('#shopping_cart_container').getByRole('link').click();
//     await removeProduct1.getByRole('button',{name:'REMOVE'}).click();
//     await expect(removeProduct1).toBeHidden();
//     await expect(page.locator('.cart_quantity')).toHaveCount(2);
    

});