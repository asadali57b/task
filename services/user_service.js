
const emitter = require('../core_app_connectivities/emitter');
const userModel = require('../models/user_model');

class UserService {
  async createUser(data) {
    const userData = new userModel(data);

    // Save the user to the database
    const savedUser = await userData.save();
    console.log('User saved successfully:', savedUser); // Debug log

    // Emit 'userCreated' event after saving the user
    emitter.emit('userCreated', savedUser);  
    console.log('userCreated event emitted'); 

    return savedUser;
  }
}

module.exports = new UserService();
