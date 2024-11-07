// global_config/config.js
module.exports = {
    appPort: process.env.PORT || 6000,
    dbUri: process.env.MONGO_URI || 'mongodb://localhost:27017/myapp'
  };
  