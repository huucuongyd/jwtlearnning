const jwt = require('jsonwebtoken');

// Set the token you want to decode
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMzA4OTgiLCJuYW1lIjoiTmd1eWVuIEh1dSBDdW9uZyIsImlhdCI6MTY4MDcxMDY5NX0.Kh5qVe_4od4MgGs7ZdNZEoKMNwvbZkdLN7gT5D_H48M';

// Set the secret used to sign the token (must match the secret used to encode the token)
const secret = 'sk';

// Verify the token using the secret
jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    // Handle errors here
    console.error(err);
  } else {
    // Print the decoded token to the console
    console.log(decoded);
  }
});
