const bcryptjs = require('bcryptjs');

module.exports = {
    up: async (queryInterface) => queryInterface.bulkInsert(
        'users',
        [
            {
                nome: 'Lucas Estima Sussermann',
                email: 'Sussermann@gmail.com',
                password_hash: await bcryptjs.hash('12345678', 8),
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                nome: 'Elisa Castilho',
                email: 'elisa.castilho@gmail.com',
                password_hash: await bcryptjs.hash('12345678', 8),
                created_at: new Date(),
                updated_at: new Date(),
            }, {
                nome: 'Marco Morote',
                email: 'marco.morote@gmail.com',
                password_hash: await bcryptjs.hash('12345678', 8),
                created_at: new Date(),
                updated_at: new Date(),
            }, {
                nome: 'Tomás Sussermann',
                email: 'tomas.sussermann@gmail.com',
                password_hash: await bcryptjs.hash('12345678', 8),
                created_at: new Date(),
                updated_at: new Date(),
            },
        ],
        {},
    ),

    down: async () => {},
};
