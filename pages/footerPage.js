class FooterPage {

  constructor(page) {
    this.addressesLink = page.locator('[href="/customer/addresses"]')
  }

  // Actions
  async clickAddressesLink() {
    await this.addressesLink.click();
  }
}

module.exports = FooterPage;