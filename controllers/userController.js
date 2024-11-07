
const userService = require('../services/user_service');
const emitter = require('../core_app_connectivities/emitter');


class userController {
  static async createUser(req, res) {
    const { userName, mobile, dob, gender, email, password } = req.body;
try {

      emitter.emit("event_Type",'userCreated', req.body);  

      res.status(201).json({ message: 'User created successfully', });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = userController;
