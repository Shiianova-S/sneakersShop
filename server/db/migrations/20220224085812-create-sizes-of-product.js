module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SizesOfProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
        },
      },
      sizeNumber: {
        type: Sequelize.INTEGER,
      },
      itemsLeft: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('SizesOfProducts');
  },
};
