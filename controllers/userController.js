
const userService = require('../services/user_service');
const emitter = require('../core_app_connectivities/emitter');
// const data=require("../event_driven_services/data_pulse.events")


class userController {
  static async createUser(req, res) {
    const { userName, mobile, dob, gender, email, password } = req.body;
try {

      emitter.emit("event_Type",'userCreated', req.body, (err, data) => {
        if (err) {
          console.error('Error in userCreated event listener:', err);
        }
      res.status(200).json({data});
      });  

    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = userController;
