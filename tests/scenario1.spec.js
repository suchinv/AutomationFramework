import { test, expect } from '@playwright/test';
import { error } from 'console';

const {pageLogin} = require('../swagLabs/page_login');
const loginData1  = require('../testData/loginData.json');

loginData1.forEach((testData) => {
test('Apitest1', async ({ page , request}) => {
   
  // await login.enterUserName(testData.standardUserName);
  // await login.enterPassword(testData.errorUserName);
  // await login.userClickLoginbtn();
  // await login.userVerifyErrMsg();

  // const products=await request.get('http://34.45.142.80:8180/api/catalogue-rest/product/15');
  // console.log(await products.json());
  let email = Math.random().toString(36).substring(2, 12)+ "@nomail.com";
 
  const registerUserResponse = await request.post(`http://34.45.142.80:8180/api/customer-rest/customer/register`, {
      data: {
        "err":"","firstName":"ee","lastName":"aa","email":email,"password":"123",
          "confirmpassword":"123"
    }
  });

  console.log(registerUserResponse)
  expect(registerUserResponse.status()).toEqual(200);
   console.log(await registerUserResponse.json())
   const login = new pageLogin(page);
   await login.gotoApp();
   await login.enterUserName(email);
   await login.enterPassword('123');
   await login.userClickLoginbtn();
//  expect(await registerUserResponse.json()).toMatchObject(
//      {
//        id: expect.any(Number),
//       firstName: "DSSDFSDFSD",
//       lastName: "P",
//        email: email,
//       password: "qwerty"
//    })
 

  
  // await page.goto('https://www.saucedemo.com/v1/');
  // await page.getByPlaceholder('Username').fill('standard_user');
  // await page.getByPlaceholder('Password').fill('secret_sause');
  // const loginButton=page.getByRole('button',{name:'LOGIN'});
  // await loginButton.click();
  // const error=page.locator('[data-test="error"]');
  // await expect(error).
  // toHaveText('Epic sadface: Username and password do not match any user in this service');
})});