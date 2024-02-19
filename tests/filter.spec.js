// @ts-check
const { test } = require('@playwright/test');

import HeaderPage from '../pages/headerPage';
import ComputerPage from '../pages/computerPage';
import LoginPage from '../pages/loginPage';
import CommonPage from '../pages/commonPage';
import { users } from '../webShopData/users';

const userData = users.user1;
let loginPage, headerPage, computerPage, commonPage;
const displayCount = '4';

test.describe('Should verify filter functionality', async () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    headerPage = new HeaderPage(page);
    computerPage = new ComputerPage(page);
    commonPage = new CommonPage(page);

    await page.goto('/login');
  });

  test('Should verify filtering by Display count', async () => {
    await loginPage.performLogin({ email: userData.email , password: userData.password });
    await headerPage.verifyUserEmailLink(userData.email);
    await headerPage.openPage('computers');
    await computerPage.selectProductCategory('desktops');
    await commonPage.selectDisplayOption(displayCount);
    await commonPage.verifyProductsDisplayCount(displayCount);
  });
});