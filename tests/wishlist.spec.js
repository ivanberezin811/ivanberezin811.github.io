// @ts-check
const { test } = require('@playwright/test');

import HeaderPage from '../pages/headerPage';
import CommonPage from '../pages/commonPage';
import LoginPage from '../pages/loginPage';
import JewelryPage from '../pages/jewelryPage';
import NotificationPage from '../pages/notificationPage';
import WishListPage from '../pages/wishListPage';
import { users } from '../webShopData/users';
import { webshopData } from '../webShopData/webShopData';

const userData = users.user1;
let loginPage, headerPage, commonPage, jewelryPage, notificationPage, wishListPage;
const jewelryAttributes = webshopData.jewelryAttributes;
const successMessages = webshopData.successMessages;

test.describe('Should verify wishlist functionality', async () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    headerPage = new HeaderPage(page);
    commonPage = new CommonPage(page);
    jewelryPage = new JewelryPage(page);
    notificationPage = new NotificationPage(page);
    wishListPage = new WishListPage(page);


    await page.goto('/login');
    await loginPage.performLogin({ email: userData.email , password: userData.password });
    await headerPage.verifyUserEmailLink(userData.email);

    //Cleanup of wishlist
    await headerPage.clickWishlistLink();
    await wishListPage.deleteAllWishes();

  });

  test('Should verify successful adding a product to wishlist', async () => {
    await headerPage.openPage('jewelry');
    await commonPage.selectProductByName('Create Your Own Jewelry')

    //Fill product form
    await jewelryPage.selectMaterial(jewelryAttributes.material);
    await jewelryPage.fillLengthInSmField(jewelryAttributes.length);
    await jewelryPage.selectPendant(jewelryAttributes.pendant);
    await jewelryPage.fillQuantityField(jewelryAttributes.qty);
    await jewelryPage.addToWishlist();

    //Verify added to wishlist
    await notificationPage.verifyNotificationSuccess(successMessages.addedToWishlist);

    //Ensure product is on the wishlist page
    await headerPage.clickWishlistLink();
    await wishListPage.verifyWishListCreated(jewelryAttributes);
  });
});