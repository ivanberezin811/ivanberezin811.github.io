module.exports.webshopData = {

  newAddressData: {
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email(),
    country: "Ukraine",
    city: "Dnipro",
    address1: chance.address(),
    zipCode: chance.zip(),
    phoneNumber: chance.phone()
  }
}