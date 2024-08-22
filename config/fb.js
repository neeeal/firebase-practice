const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); // Ensure the path is correct

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://fir-practice-e86c7.firebaseio.com' // Replace with your actual database URL if using Realtime Database
});

module.exports = admin;
