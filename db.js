const { Sequelize } = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize
('catbreeds', 'root', '12345678', 
{ host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
