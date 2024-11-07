
const emitter = require('../core_app_connectivities/emitter');
const UserService=require('../services/user_service');


  emitter.on('event_Type', (eventType, data) => {
    try {
      switch (eventType) {
        
        case 'userCreated':
          UserService.createUser(data);
          console.log('User Created Event Triggered with Data:', data);
          break;
        default:
          console.error('Invalid event type:', eventType);
      }
      // Additional async or sync actions go here
    } catch (err) {
      console.error('Error in userCreated event listener:', err);
    }
  });
  console.log('Event listener for userCreated is active');


