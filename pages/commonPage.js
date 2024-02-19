const { expect } = require("@playwright/test");

class CommonPage {

  constructor(page) {
    this.displayDropdown = page.locator('#products-pagesize');
    this.productItem = page.locator('.product-item');
    this.productTitle = page.locator('.product-title');
  }

  // Actions
  async selectDisplayOption(option) {
    await this.displayDropdown.selectOption(option);
  }

  async verifyProductsDisplayCount(expectedCount) {
    await expect(this.productItem).toHaveCount(Number(expectedCount));
  }

  async selectProductByName (productName) {
    const productTitleElements = await this.productTitle.all();
    for (const elem of productTitleElements) {
      if (await elem.innerText() === productName) {
        await elem.click();
        break;
      }
    }
  }
}

module.exports = CommonPage;