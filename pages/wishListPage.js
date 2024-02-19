const { expect } = require("@playwright/test");

class WishListPage {

  constructor(page) {
    this.wishListContent = page.locator('.wishlist-content');
    this.wishItem = page.locator('.cart-item-row');
    this.quantityInput = page.locator('[name*="itemquantity"]');
    this.wishCheckbox = page.locator('[name="removefromcart"]');
    this.updateWishlistButton = page.locator('.update-wishlist-button');
  }

  // Actions
  async verifyWishListCreated (data) {
    await expect(this.wishListContent).not.toContainText('The wishlist is empty!');
    await expect(this.wishItem).toContainText(`Material: ${data.material}`);
    await expect(this.wishItem).toContainText(`Length: ${data.length}`);
    await expect(this.wishItem).toContainText(`Pendant: ${data.pendant}`);
    await expect(this.quantityInput).toHaveValue(data.qty);
  }

  async deleteAllWishes () {
    const wishlistText = await this.wishListContent.innerText();
    if (!wishlistText.includes('empty')) {
      const checkboxes = await this.wishCheckbox.all();
      for (const checkbox of checkboxes) {
        await checkbox.check();
      }
      await this.updateWishlistButton.click();
    }
  }
}

module.exports = WishListPage;