class AddressesPage {

  constructor(page) {
    this.addNewButton = page.locator('input[value="Add new"]')
    this.firstNameInput = page.locator('#Address_FirstName')
    this.lastNameInput = page.locator('#Address_LastName')
    this.emailInput = page.locator('#Address_Email')
    this.countryDropdown = page.locator('#Address_CountryId')
    this.cityInput = page.locator('#Address_City')
    this.address1Input = page.locator('#Address_Address1')
    this.zipCodeInput = page.locator('#Address_ZipPostalCode')
    this.phoneNumberInput = page.locator('#Address_PhoneNumber')
    this.saveButton = page.locator('input[value="Save"]')
  }

  // Actions
  async clickAddNewAddressButton() {
    await this.addNewButton.click();
  }

  async fillAddressForm(addressData) {
    if (addressData.firstName) await this.firstNameInput.fill(addressData.firstName);
    if (addressData.lastName) await this.lastNameInput.fill(addressData.lastName);
    if (addressData.email) await this.emailInput.fill(addressData.email);
    if (addressData.country) await this.countryDropdown.selectOption(addressData.country);
    if (addressData.city) await this.cityInput.fill(addressData.city);
    if (addressData.address1) await this.address1Input.fill(addressData.address1);
    if (addressData.zipCode) await this.zipCodeInput.fill(addressData.zipCode);
    if (addressData.phoneNumber) await this.phoneNumberInput.fill(addressData.phoneNumber);
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }
}

module.exports = AddressesPage;