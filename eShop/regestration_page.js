const { expect } = require('@playwright/test');

exports.registerPage = class  regestration_page{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.moreIcon=page.locator('#menu');
    this.btnLogin=page.getByText('Login');
    this.createAccount=page.getByText('Create Your E-Shop Account');
     this.firstName=page.locator('#firstName');
     this.lastName=page.locator('#lastName');
     this.email=page.locator('#email');
     this.paswrd=page.locator('#password');
     this.conPswrd=page.locator('#confirmpassword');
     this.error=page.getByText('This Password and Confirm');
  }
    async gotoApp(){
       await this.page.goto('http://34.45.142.80:3000/cts-shop/');
        
    }
    async clickOnUserCreation(){
      await this.moreIcon.click();
      await this.btnLogin.click();
      await this.createAccount.click();
    }
    async userCreateAcont(){
      await this.firstName.fill('Ram');
      await this.lastName.fill('Rana');
      await this.email.fill('ram@rana.com');
      await this.paswrd.fill('1111');
      await this.conPswrd.fill('1111');
      await this.createAccount.click();
    }
    async userVerifyErrMsg(){
      await expect(this.error).toHaveText('This Password and Confirm Password donot match');

    }
      
    };

