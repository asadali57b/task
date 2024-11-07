
// const emitter = require('../core_app_connectivities/emitter');
// const userModel = require('../models/user_model');

// class UserService {
//   async createUser(data) {
//     console.log('User Created Event Triggered with Data:', data)

//     const userData = new userModel(data);

//     // Save the user to the database
//     const savedUser = await userData.save();
//     console.log('User saved successfully:', savedUser); // Debug log

//     // Emit 'userCreated' event after saving the user
//     emitter.emit('userCreated', savedUser,);  
//     console.log('userCreated event emitted'); 

//     return savedUser;
//   }
// }

// module.exports = new UserService();


const userModel = require('../models/user_model');

class UserService {
  async createUser(data) {
    console.log('User Created Event Triggered with Data:', data);

    // Emit 'userCreated' event before saving the user
    console.log('userCreated event emitted'); 

    // Create a new user instance with the provided data
    const userData = new userModel(data);

    // Save the user to the database
    const savedUser = await userData.save();
    console.log('User saved successfully:', savedUser); // Debug log

    return savedUser;
  }
}

module.exports = new UserService();

