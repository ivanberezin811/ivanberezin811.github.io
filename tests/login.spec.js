// @ts-check
const { test } = require('@playwright/test');

import HeaderPage from '../pages/headerPage';
import LoginPage from '../pages/loginPage';
import { users } from '../webShopData/users';

const userData = users.user1;
let loginPage, headerPage;

test.describe('Log In', async () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    headerPage = new HeaderPage(page);

    await page.goto('/login');
  });

  test('Should verify successful login', async () => {
    await loginPage.performLogin({ email: userData.email , password: userData.password });
    await headerPage.verifyUserEmailLink(userData.email);
  });
});