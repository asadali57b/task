
const emitter = require('../core_app_connectivities/emitter');
const UserService = require('../services/user_service');

// Listen for 'event_Type' events
// emitter.on('event_Type', async (eventType, data, callback) => {
//   try {
//     let response_user;
//     switch (eventType) {
//       case 'userCreated':
//         // Asynchronous creation of user
//         response_user = await UserService.createUser(data);
//           callback(null, response_user);  
        
//         break;
//         case 'getAllUsers':
//         response = await userService.getAllUsers();
//         break;

//       case 'getUserById':
//         response = await userService.getUserById(data.userId);
//         break;
 

//       default:
//         console.error('Invalid event type:', eventType);
        
        
//           // callback(new Error('Invalid event type'), null);  
        
//         break;
//     }
//   } catch (err) {
//     console.error('Error in userCreated event listener:', err);

//     if (callback) {
//       callback(err, null); 
//     }
//   }
// });

// console.log('Event listener for userCreated is active');

emitter.on('event_Type', async (eventType, data, callback) => {

  try {
    let response;
    switch (eventType) {
      case 'userCreated':
        response = await UserService.createUser(data);
        break;

      case 'getAllUsers':
        response = await UserService.getAllUsers();
        break;

      case 'getUserById':
        response = await UserService.getUserById(data.userId);
        break;
        case 'deleteUser':
        response = await UserService.deleteUser(data.userId);
        break;
        case 'updateUser':
        response = await UserService.updateUser(data.userId, data.data);
        break;

      default:
        console.error('Invalid event type:', eventType);
        callback(new Error('Invalid event type'), null);
        return;
    }
    callback(null, response); // Pass response back via callback
  } catch (err) {
    console.error(`Error handling ${eventType}:`, err);
    callback(err, null);
  }
});


