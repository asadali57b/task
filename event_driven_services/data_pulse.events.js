
// const emitter = require('../core_app_connectivities/emitter');
// const UserService=require('../services/user_service');


//   emitter.on('event_Type', async (eventType, data,callback) => {
//     try {
//       switch (eventType) {
        
//         case 'userCreated':
//            const response_user=await UserService.createUser(data);
//           console.log('User Created Event Triggered with Data:', data);
//           break;
//         default:
//           console.error('Invalid event type:', eventType);
//       }
//       // Additional async or sync actions go here
//     } catch (err) {
//       console.error('Error in userCreated event listener:', err);
//     }
//   });
//   console.log('Event listener for userCreated is active');


const emitter = require('../core_app_connectivities/emitter');
const UserService = require('../services/user_service');

// Listen for 'event_Type' events
emitter.on('event_Type', async (eventType, data, callback) => {
  try {
    let response_user;
    switch (eventType) {
      case 'userCreated':
        // Asynchronous creation of user
        response_user = await UserService.createUser(data);
          callback(null, response_user);  
        
        break;

      default:
        console.error('Invalid event type:', eventType);
        
        
          // callback(new Error('Invalid event type'), null);  
        
        break;
    }
  } catch (err) {
    console.error('Error in userCreated event listener:', err);

    if (callback) {
      callback(err, null); 
    }
  }
});

console.log('Event listener for userCreated is active');



