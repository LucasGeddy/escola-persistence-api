"use strict";module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('photos');

        await queryInterface.createTable('student_photos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            originalname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            filename: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            aluno_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'alunos',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('student_photos');
    },
};
