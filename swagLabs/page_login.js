const { expect } = require('@playwright/test');

exports.pageLogin = class PageLogin {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userName=page.locator('[id="email"]');
    this.password=page.locator('[id="password"]');
    this.btnLogin=page.getByText('Log In');
    this.errMsg=page.locator('[data-test="error"]');
  }

  async gotoApp() {
    await this.page.goto('http://34.45.142.80:3000/cts-shop/login');
  }

  async enterUserName(strUsername) {
    await this.userName.fill(strUsername);
    
  }

  async enterPassword(strPassword) {
    await this.password.fill(strPassword);
    
  }
  async userClickLoginbtn(){
  await this.btnLogin.click();

  }
  async userVerifyErrMsg(){
    await expect(this.errMsg).
  toHaveText('Epic sadface: Username and password do not match any user in this service');
  }
};