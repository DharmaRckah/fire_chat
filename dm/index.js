// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendNotification = functions.https.onRequest(async (req, res) => {
  const message = req.body.message;

  // Get all users' FCM tokens from Firestore
  const usersSnapshot = await admin.firestore().collection('users').get();
  const tokens = [];

  usersSnapshot.forEach(doc => {
    const userData = doc.data();
    if (userData.fcmToken) {
      tokens.push(userData.fcmToken);
    }
  });

  const payload = {
    notification: {
      title: 'New Notification',
      body: message,
    },
  };

  try {
    const response = await admin.messaging().sendToDevice(tokens, payload);
    console.log('Notifications sent successfully:', response);
    res.status(200).send('Notifications sent successfully');
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).send('Error sending notifications');
  }
});

