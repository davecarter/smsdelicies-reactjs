import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA9Qhp-qnNLOdqoreQ1jY-yNTGDdM_Ot4M',
  authDomain: 'sms-delicies.firebaseapp.com',
  databaseURL: 'https://sms-delicies.firebaseio.com',
  projectId: 'sms-delicies',
  storageBucket: 'sms-delicies.appspot.com',
  messagingSenderId: '755814013943'
}

firebase.initializeApp(config)
export default firebase
export const database = firebase.database()