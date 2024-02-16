const { expect } = require("@playwright/test");

class HeaderPage {

  constructor(page) {
    this.userEmailLink = page.locator('.header-links [href="/customer/info"]')
  }

  // Actions
  async verifyUserEmailLink(email) {
    await expect(this.userEmailLink).toHaveText(email)
  }
}

module.exports = HeaderPage;