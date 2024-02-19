const { expect } = require("@playwright/test");

class HeaderPage {

  constructor(page) {
    this.page = page
    this.userEmailLink = page.locator('.header-links [href="/customer/info"]');
    this.productName = (productName) => page.locator(`.top-menu [href="/${productName}"]`);
    this.wishlistLink = page.locator(`.header-links .ico-wishlist`);
  }

  // Actions
  async verifyUserEmailLink(email) {
    await expect(this.userEmailLink).toHaveText(email);
  }

  async openPage(productName) {
    await this.productName(productName).click();
  }

  async clickWishlistLink() {
    await this.wishlistLink.click();
  }
}

module.exports = HeaderPage;