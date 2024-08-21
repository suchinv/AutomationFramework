exports.pageInventory = class PageInventory {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.product_inventory=page.locator(".inventory_item")
      
          }
    async userSelectProductByName(strProduct){
       await this.product_inventory.filter({hasText:strProduct}).getByRole('button',{name:'ADD TO CART'})
       .click();
    }
    
    };