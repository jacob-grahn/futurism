import firebase from 'firebase'
window.firebase = firebase // firebaseui breaks without this...

const config = {
  apiKey: 'AIzaSyCkbFdGivi23G0R1NuQeS2yHLHm7d0Ku34',
  authDomain: 'futurism-7d840.firebaseapp.com',
  databaseURL: 'https://futurism-7d840.firebaseio.com',
  storageBucket: 'futurism-7d840.appspot.com',
  messagingSenderId: '854383502229'
}

export default () => {
  firebase.initializeApp(config)
  return firebase
}
