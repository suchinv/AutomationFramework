exports.pageCheckout = class PageCheckout {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.btnCheckout=page.getByText('CHECKOUT');

    this.frstName= page.getByPlaceholder('First Name');
    this.lstName=page.getByPlaceholder('Last Name');
    this.zipcode= page.getByPlaceholder('Zip/Postal Code');
    this.btnContinue=page.getByRole('button', { name: 'CONTINUE' });
    this.btnFinish= page.getByText('FINISH');
    this.orderMsg=page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' });
    }
    async userClickOnCheckout(){
        await this.btnCheckout.click();
    }
   async userProvideCheckoutInfrmtion(jsonData){
    await this.frstName.fill(jsonData.firstName);
    await this.lstName.fill(jsonData.lastName);
    await this.zipcode.fill(jsonData.zipcode);
    await this.btnContinue.click();
    await this.btnFinish.click();
   }
   async userVerifyOrderMsg(){
    await expect(this.orderMsg).toBeVisible();
   }
};