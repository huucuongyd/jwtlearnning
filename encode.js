const jwt = require('jsonwebtoken');

// Create a payload with any data you want to include in the token
const payload = {
  userId: '030898',
  name: 'Nguyen Huu Cuong',
};

// Set the secret used to sign the token (keep this secret!)
const secret = 'sk';


// Generate the token using the payload, secret, and options
const token = jwt.sign(payload, secret);

// Print the token to the console
console.log(token);