class LoginPage {

  constructor(page) {
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.loginButton = page.locator('.login-button');
  }

  // Actions
  async performLogin(user, clickLogin = true) {
    if(user.email) await this.emailInput.fill(user.email)
    if(user.password) await this.passwordInput.fill(user.password)
    if(clickLogin) await this.loginButton.click()
  }
}

module.exports = LoginPage;