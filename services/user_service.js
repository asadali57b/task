
const userModel = require('../models/user_model');

class UserService {
  async createUser(data) {
    try{
      console.log('User Created Event Triggered with Data:', data);

      // Emit 'userCreated' event before saving the user
      console.log('userCreated event emitted'); 
  
      // Create a new user instance with the provided data
      const userData = new userModel(data);
  
      // Save the user to the database
      const savedUser = await userData.save();
      if (savedUser) {
        return {
          message: 'User creation successful',
          data: savedUser
        };
      }
      console.log('User saved successfully:', savedUser); // Debug log
      
  
      return savedUser;
    }catch(err){
        console.log('Error in userCreated event listener:', err);
    }
  }
}

module.exports = new UserService();

