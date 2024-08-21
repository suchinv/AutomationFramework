exports.pageCart = class PageCart {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.cartContainer=page.locator('#shopping_cart_container').getByRole('link');
      this.removeProduct=page.locator(".cart_item");
    }
    async userClickOnCart(){
        await this.cartContainer.click();
    }
    async userRemoveProduct(strRemoveProduct){
        await this.btnRemove.filter({hasText:strRemoveProduct}).getByRole('button',{name:'REMOVE'}).click();
    }
    async userVerifyProductRemoved(){
        await expect(this.removeProduct).toBeHidden();
    }
    async userVerifyCartCount(num){
        await expect(page.locator('.cart_quantity')).toHaveCount(num);
        
    }
};