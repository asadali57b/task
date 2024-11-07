
const userService = require('../services/user_service');
const emitter = require('../core_app_connectivities/emitter');
// const data=require("../event_driven_services/data_pulse.events")


class userController {
   async createUser(req, res) {
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
   async getAllUsers(req, res) {
    emitter.emit('event_Type', 'getAllUsers', {}, (err, data) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(200).json({ data });
    });
  }
   async getUserById(req, res) {
    const  userId  = req.params.id;
console.log(userId);
    emitter.emit('event_Type', 'getUserById', { userId }, (err, data) => {
      console.log(userId);
      if (err) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json({ data });
    });
  }
  async deleteUser(req, res) {
    const userId = req.params.id;
    emitter.emit('event_Type', 'deleteUser', { userId }, (err, data) => {
      if (err) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    });
  }
  async updateUser(req, res) {
    const userId = req.params.id;
    const { userName, mobile, dob, gender, email, password } = req.body;
    emitter.emit('event_Type', 'updateUser', { userId, data: req.body }, (err, data) => {
      if (err) {
        return res.status(404).json({ message: err.message });
      }
      res.status(200).json({ message: 'User updated successfully',data });
    });
  }
}

module.exports = new userController();
