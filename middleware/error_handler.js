// const { error } = require('console');
// const logger = require('../utils/logger');
// module.exports = (err,req,res,next)=>{
//     logger.logError(err);
//     res.status(500).json({error: "Internal Server Error"});
// };
// middleware/errorMiddleware.js
class ErrorMiddleware {
    static errorHandler(err, req, res, next) {
      console.error(err.stack);
      res.status(500).send({ message: 'Something went wrong!' });
    }
  }
  
  module.exports = ErrorMiddleware;
  