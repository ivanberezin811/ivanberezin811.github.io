const { expect } = require("@playwright/test");

class NotificationPage {

  constructor(page) {
    this.notificationSuccess = page.locator('.bar-notification.success');
  }

  // Actions
  async verifyNotificationSuccess(text) {
    await expect(this.notificationSuccess).toBeVisible();
    await expect(this.notificationSuccess).toContainText(text);
  }
}

module.exports = NotificationPage;