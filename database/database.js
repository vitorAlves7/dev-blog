const Sequelize = require("sequelize");

const connection = new Sequelize('blog-dev', 'root', 'Jnvd75**', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
