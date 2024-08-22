
const admin = require('firebase-admin');
const fb = require('../config/fb.js');
const db = fb.firestore()
exports.post = async (req, res) => {
    const data = req.body;
    try {
        const user = await fb.auth().createUser({
          email: data.email,
          password: data.password,
          displayName: data.username,
          phoneNumber: data.contact,
        });
        console.log('Successfully created user:', user.uid);
        res.status(200).send({
            message: "Created new user"
        })
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({
            message: `Error creating user: ${error}`
        })
      }
    // return db.collection('users').doc(req.uid).set({
    //     activeSub: false,
    //     name: req.body.name
    //   })
    //   .catch(err => {
    //     throw new functions.https.HttpsError('unknown', err.message, {success:false, error: {err}})
    //   })
}