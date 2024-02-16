// @ts-check
const { test } = require('@playwright/test');

import HeaderPage from '../pages/headerPage';
import LoginPage from '../pages/loginPage';
import FooterPage from '../pages/footerPage';
import AddressesPage from '../pages/addressesPage';
import { users } from '../webShopData/users';
import { webshopData } from '../webShopData/webShopData'

const newAddressData = webshopData.newAddressData;
const userData = users.user1;
let loginPage, headerPage, footerPage, addressesPage;

test.describe.skip('Account address', async () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    headerPage = new HeaderPage(page);
    footerPage = new FooterPage(page);
    addressesPage = new AddressesPage(page);

    await page.goto('/login');
    await loginPage.performLogin({ email: userData.email , password: userData.password });
  });

  test('Should verify adding new account address', async () => {
    await headerPage.verifyUserEmailLink(userData.email);
    await footerPage.clickAddressesLink();

    await addressesPage.clickAddNewAddressButton();
    await addressesPage.fillAddressForm(newAddressData);
    await addressesPage.clickSaveButton();
  });
})