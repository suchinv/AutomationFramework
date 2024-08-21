const { expect } = require('@playwright/test');

exports.registerPage = class  regestration_page{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchProduct=page.locator('#productsearch');
    this.searchIcon=page.locator('#searchicon');
    this.item1=page.getByRole('link',{name: 'Apple iPhone 6s Plus'});
    this.btnCart=page.locator('#basket');
    this.checkout=page.getByText('Proceed to checkout');
    this.titleName=page.locator('#datitle');
    this.firstName=page.locator('#dafirstname');
    this.lastName=page.locator('dalastname');
    this.address1=page.locator('#daaddressline1');
    this.address2=page.locator('#daaddressline2');
    this.city=page.locator('#dacity');
    this.state=page.locator('#dastateprovinceregion');
    this.zipcode=page.locator('#dazippostcode');
    this.btnNext=page.getByText('Next');
    this.crdNumber=page.locator('#cardnumber');
    this.NameOnCard=page.locator('#nameoncard');
    this.expMonth=page.locator('#expirymonth');
    this.expYear=page.locator('#expiryyear');
    this.seqCode=page.locator('#securitycode');
    this.btnConfirm=page.locator('#buttonconfirm');
  }
  async userSearchProduct(){
    await this.searchProduct.fill('apple');
    await this.searchIcon.click();
  }
  async userAddProductToCart(){
    await this.item1.click();
    await this.btnCart.click();
  }
  async userProceedTocheckout(){
    await this.checkout.click();
    await this.titleName.fill('rrr');
    await this.firstName.fill('Ram');
    await this.lastName.fill('sita');
    await this.address1.fill('road1');
    await this.address2.fill('Nagar');
    
  }
};
