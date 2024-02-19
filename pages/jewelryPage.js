class JewelryPage {

  constructor(page) {
    this.materialDropdown = page.locator('[name="product_attribute_71_9_15"]');
    this.lengthInCmInput = page.locator('[name="product_attribute_71_10_16"]');
    this.pendantLabel = page.locator('.option-list label');
    this.quantityInput = page.locator('[name="addtocart_71.EnteredQuantity"]');
    this.addToWishlistButton = page.locator('#add-to-wishlist-button-71');
  }

  // Actions
 async selectMaterial (material) {
    await this.materialDropdown.selectOption(material);
 }

  async fillLengthInSmField (lengthInSm) {
    await this.lengthInCmInput.fill(lengthInSm);
  }

  async selectPendant (pendant) {
    const pendants = await this.pendantLabel.all();
    for (const elem of pendants) {
      if (await elem.innerText() === pendant) {
       await elem.click();
       break;
      }
    }
  }

  async fillQuantityField (quantity) {
    await this.quantityInput.clear();
    await this.quantityInput.fill(quantity);
  }

  async addToWishlist () {
    await this.addToWishlistButton.click();
  }
}

module.exports = JewelryPage;