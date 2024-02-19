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
  },

  //JewelryData
  jewelryAttributes: {
    material: 'Gold (1 mm)',
    length: '15',
    pendant: 'Ladybug',
    qty: '3'
  },

   successMessages: {
    addedToWishlist: 'The product has been added to your wishlist'
   }
}