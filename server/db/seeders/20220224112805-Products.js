module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Nike Air Huarache', gender: 'female', description: 'Сланцы — перфорация в районе язычка — технология Dynamic Fit — мягкая амортизирующая подошва из пеноматериала', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/774/1164_1748_1/7749201e93f2a57c53b9fdcf929cfe20.jpg', rating: 4, price: 1990, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'New Balance 997', gender: 'male', description: ' Сланцы— вставки из материала Cordura — пеноматериал EVA для мидсоля — прямая шнуровка', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/153/1164_1748_1/153ca4f01f7d9ff841a552df86e535f4.jpg', rating: 5, price: 5440, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'New Balance XC-72', gender: 'male', description: 'Сланцы Цвета: Белый  Страна: Китай Состав: Кожа, синтетика, текстиль, резина', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/6b9/1164_1748_1/6b9bfe7c3237c4e143e661ed443d00a9.jpg', rating: 1, price: 3900, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nike WMNS Icon Classic Sandal', gender: 'female', description: ' Сланцы Пол: Женское Цвета: Розовый Страна: Вьетнам', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/e80/1164_1748_1/e80bdd50c9c944856c5df0806395ee59.jpg', rating: 2, price: 21240, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Crocs Classic Hiker Peace Out', gender: 'female', description: 'Сандалии Цвета: Белый / Разноцветный Страна: Китай', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/5c2/1164_1748_1/5c253e2a78d525d8a1e3cd728e45b5c4.jpg', rating: 3, price: 20870, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nike Free Terra Vista', gender: 'male', description: 'Сланцы — сетка, искусственная замша и канвас для верха кроссовок — петельчатая шнуровка — петля на заднике для удобства надевания', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/e24/1164_1748_1/e24c0e85cc80937ef90b6eb3db00b33f.jpg', rating: 3, price: 11340, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'adidas Originals Streetball II', gender: 'male', description: 'Сланцы — натуральная замша и текстиль для верха кроссовок— комбинированная шнуровка — пеноматериал LightStrike для амортизации', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/e0c/1164_1748_1/e0c90e221505fde3eb4afcf5d6badb0d.jpg', rating: 5, price: 1590, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'adidas Originals Streetball II ', gender: 'male', description: 'Сланцы — натуральная замша и текстиль для верха кроссовок— комбинированная шнуровка — пеноматериал LightStrike для амортизации', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/6d4/1164_1748_1/6d4a2dc26c24c65a7acae10afd9e7a0f.jpg', rating: 4, price: 2000, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nike Air Max Terrascape Plus', gender: 'female', description: 'Сланцы SAINT BIRTH', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/56b/1164_1748_1/56bca55b6cc9fe0ea1e8cf46fb5e4345.jpg', rating: 1, price: 3900, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ASICS Gel-Venture 6', gender: 'male', description: 'Сланцы GEL-Venture 6 — практичный и универсальный силуэт от ASICS Tiger. Благодаря комбинации нейлоновой сетки и износостойких материалов', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/4e4/1164_1748_1/4e4c46c7537a7dbd6a1d539393e8fbb2.jpg', rating: 2, price: 2140, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Jordan WMNS 5 Retro Low', gender: 'female', description: 'Сланцы 5 Retro — пятая номерная модель, созданная Тинкером Хетфилдом для линейки Майкла Джордана. Впервые модель появилась в феврале 1990 года в качестве баскетбольных кроссовок.', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/f50/1164_1748_1/f500e69cdb2f69a95fb4c29958374185.jpg', rating: 3, price: 2070, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nike WMNS Blazer low Platform', gender: 'male', description: 'Сандалии Кроссовки Blazer Mid — классика моделей от Nike', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/d55/1164_1748_1/d55f1701791364637ff5df60652cbefc.jpg', rating: 4, price: 1140, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Jordan 1 Mid Alt ', gender: 'kid', description: 'Сандалии 1 Mid — средняя версия первых номерных от Майкла Джордана', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/2b3/1164_1748_1/2b3ffedb429293eea70f91d09b901082.jpg', rating: 4, price: 990, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Jordan 1 Low Alt ', gender: 'kid', description: 'Шлепанцы 1 Retro — первые номерные от короля воздуха Майкла Джордана.', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/cec/1164_1748_1/cecea3e9a41e6d305fa2636e18c85579.jpg', rating: 2, price: 2120, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Jordan Sky 1 (PS)', gender: 'kid', description: 'Сланцы с Jordan Sky 1 (TD) — первые номерные, адаптированные специально для детей.', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/833/1164_1748_1/833acbe53df81a9c68c5eff3565e94fe.jpg', rating: 3, price: 666, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: ' New Balance 574 Rugged Gore-Tex', gender: 'kid', description: 'Шлепанцы 574 Rugged Gore-Tex от New Balance. Классика бренда в практичном осенне-зимнем исполнении.', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/97c/1164_1748_1/97c34b4aeba0d0d768db6f400eee9f57.jpg', rating: 5, price: 1488, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Jordan 1 Mid SE (PS)', gender: 'kid', description: 'Шлепанцы Кроссовки 1 Mid "Slim Vortex "от Jordan в детской размерной сетке.', photo: 'https://sneakerhead.ru/upload/resize_cache/iblock/289/1164_1748_1/289560700cfd21d91e38429d5e5388fb.jpg', rating: 1, price: 3510, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'BOLSCHEVICHKA', gender: 'kid', description: 'Сланцы голубоватые', photo: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80', rating: 5, price: 1560, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'DOSTAVKADICHI', gender: 'kid', description: 'Сланцы GOLUBKOVIE', photo: 'https://cs10.pikabu.ru/post_img/2018/09/17/7/1537185182127374570.jpg', rating: 5, price: 1560, status: 'active', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products');
  },
};
