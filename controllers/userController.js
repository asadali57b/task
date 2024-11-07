
const userService = require('../services/user_service');

class userController {
  static async createUser(req, res) {
    const { userName, mobile, dob, gender, email, password } = req.body;
    try {
      const user = await userService.createUser({ userName, mobile, dob, gender, email, password });
      res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = userController;
