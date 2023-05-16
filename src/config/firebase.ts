// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7YLVpHDanmVrFbnEqnr3vRs3uhjx_EMo',
  authDomain: 'foodorder-bdf26.firebaseapp.com',
  projectId: 'foodorder-bdf26',
  storageBucket: 'foodorder-bdf26.appspot.com',
  messagingSenderId: '648818248506',
  appId: '1:648818248506:web:6852b0abde0bd2283f9e03'
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
export default firebase
