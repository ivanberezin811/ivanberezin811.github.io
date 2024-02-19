class ComputerPage {

  constructor(page) {
    this.categoryName = (categoryName) => page.locator(`.title [href="/${categoryName}"]`);
  }

  // Actions
  async selectProductCategory(categoryName) {
    await this.categoryName(categoryName).click();
  }
}

module.exports = ComputerPage;