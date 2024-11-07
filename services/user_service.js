
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
  async getAllUsers() {
    try {
      const users = await userModel.find(); // Fetch all users
      return users;
    } catch (err) {
      console.error('Error fetching all users:', err);
      throw err;
    }
  }
  async getUserById(userId) {
    try {
      const user = await userModel.findById(userId); // Fetch user by ID
      if (!user) throw new Error('User not found');
      return user;
    } catch (err) {
      console.error('Error fetching user by ID:', err);
      throw err;
    }
  }
  async deleteUser(userId) {
    try {
      const deletedUser = await userModel.findByIdAndDelete(userId); // Delete user by ID
      if (!deletedUser) throw new Error('User not found');
      return deletedUser;
    } catch (err) {
      console.error('Error deleting user:', err);
      throw err;
    }
  }
  async updateUser(userId, data) {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(userId, data, { new: true }); // Update user by ID
      if (!updatedUser) throw new Error('User not found');
      return updatedUser;
    } catch (err) {
      console.error('Error updating user:', err);
      throw err;
    }
  }
  
}

module.exports = new UserService();

