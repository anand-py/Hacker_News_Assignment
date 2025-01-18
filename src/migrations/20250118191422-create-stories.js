'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      author: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      points: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      hn_timestamp: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(10),
        defaultValue: 'active',
        validate: {
          isIn: [['active', 'deleted']]
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });

    // Add indexes with unique names
    await queryInterface.addIndex('stories', ['created_at'], {
      name: 'idx_stories_created_at'
    });

    await queryInterface.addIndex('stories', ['hn_timestamp'], {
      name: 'idx_stories_hn_timestamp'
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop indexes first
    await queryInterface.removeIndex('stories', 'idx_stories_created_at');
    await queryInterface.removeIndex('stories', 'idx_stories_hn_timestamp');
    
    // Then drop the table
    await queryInterface.dropTable('stories');
  }
};