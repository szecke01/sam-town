var path = require('path');

var config = {  
  production: {
    url: 'http://sam.town',
    mail: {},
    database: {
      client: 'mysql',
      connection: {
        socketPath: '/cloudsql/sam-town:us-central1:sam-town-alpha',
        user     : 'root',
        password : 'mintyfresh',
        database : 'ghost',
        charset  : 'utf8'
      }
    },
    server: {
      host: "0.0.0.0",
      port: process.env.PORT
    },
    fileStorage: false
  },

  development: {
    url: 'http://localhost:2368',
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-dev.db')
      },
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  }
};

module.exports = config;  
