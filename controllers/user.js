
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
}

exports.put = async (req, res) => {
    const data = req.body;
    const uid = req.params.uid;
    try {
    const updatedUser = await admin.auth().updateUser(uid, {
      email: data.email,
      password: data.password,
      displayName: data.username,
      phoneNumber: data.contact,
    });
    console.log('Successfully updated user:', updatedUser.uid);
    res.status(200).send({
        message: "Updated user"
    })
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send({
        message: `Error updating user: ${error}`
    })
  }
}

exports.disable = async (req, res) => {
  const uid = req.params.uid;
  try {
    await admin.auth().updateUser(uid, {
      disabled: true
    });
  console.log('Successfully disabled user:', uid);
  res.status(200).send({
      message: "Disabled user"
  })
} catch (error) {
  console.error('Error disabling user:', error);
  res.status(500).send({
      message: `Error disabling user: ${error}`
  })
}
}

exports.enable = async (req, res) => {
  const uid = req.params.uid;
  try {
    await admin.auth().updateUser(uid, {
      disabled: false
    });
  console.log('Successfully enabled user:', uid);
  res.status(200).send({
      message: "Enabled user"
  })
} catch (error) {
  console.error('Error enabling user:', error);
  res.status(500).send({
      message: `Error enabling user: ${error}`
  })
}
}

exports.delete = async (req, res) => {
  const uid = req.params.uid;
  try {
    await admin.auth().deleteUser(uid);
  console.log('Successfully deleted user:', uid);
  res.status(200).send({
      message: "Deleted user"
  })
} catch (error) {
  console.error('Error deleting user:', error);
  res.status(500).send({
      message: `Error deleting user: ${error}`
  })
}
}