var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');
//var db = new Sequelize('postgres://ubuntu:1234@localhost'+'/wikistack'); // for sazi

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING, allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING, allowNull: true
    },
    content: {
        type: Sequelize.TEXT, allowNull: false,defaultValue:'Oczanee'
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING, allowNull: false
    },
    email: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
                isEmail: true
            }
    }

});

module.exports = {
  Page: Page,
  User: User,
  db: db
};
