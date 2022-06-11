module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('SizesOfProducts', [
      {
        productId: 1, sizeNumber: 33, itemsLeft: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 2, sizeNumber: 40, itemsLeft: 50, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 3, sizeNumber: 39, itemsLeft: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 4, sizeNumber: 37, itemsLeft: 0, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 5, sizeNumber: 35, itemsLeft: 0, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 6, sizeNumber: 41, itemsLeft: 9, createdAt: new Date(), updatedAt: new Date(),
      },
      {

        productId: 1, sizeNumber: 37, itemsLeft: 10, createdAt: new Date(), updatedAt: new Date(),

      },
      {
        productId: 2, sizeNumber: 42, itemsLeft: 50, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 3, sizeNumber: 38, itemsLeft: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 4, sizeNumber: 39, itemsLeft: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 5, sizeNumber: 42, itemsLeft: 0, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 6, sizeNumber: 43, itemsLeft: 9, createdAt: new Date(), updatedAt: new Date(),

      },
      {
        productId: 1, sizeNumber: 38, itemsLeft: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 7, sizeNumber: 39, itemsLeft: 50, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 3, sizeNumber: 40, itemsLeft: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 4, sizeNumber: 41, itemsLeft: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 5, sizeNumber: 42, itemsLeft: 0, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        productId: 6, sizeNumber: 36, itemsLeft: 9, createdAt: new Date(), updatedAt: new Date(),

      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('SizesOfProducts');
  },
};
