module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'vova@vova', password: '1234', role: 'user', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        email: 'igor@igor', password: '1234', role: 'admin', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        email: 'sveta@sveta', password: '1234', role: 'user', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        email: 'ivan@ivan', password: '1234', role: 'user', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        email: 'ernis@ernis', password: '1234', role: 'user', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users');
  },
};
