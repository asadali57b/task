
const emitter = require('../core_app_connectivities/emitter');

function setupUserCreatedListener() {
  emitter.on('userCreated', (data) => {
    try {
      console.log('User Created Event Triggered with Data:', data);
      // Additional async or sync actions go here
    } catch (err) {
      console.error('Error in userCreated event listener:', err);
    }
  });
  console.log('Event listener for userCreated is active');
}

module.exports = setupUserCreatedListener;
