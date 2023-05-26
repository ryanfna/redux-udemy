// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7YLVpHDanmVrFbnEqnr3vRs3uhjx_EMo',
  authDomain: 'foodorder-bdf26.firebaseapp.com',
  projectId: 'foodorder-bdf26',
  storageBucket: 'foodorder-bdf26.appspot.com',
  messagingSenderId: '648818248506',
  appId: '1:648818248506:web:f7bc8c0ff0de18693f9e03'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)
const auth = getAuth(app)
auth.languageCode = 'it'
export { database, auth, RecaptchaVerifier, signInWithPhoneNumber }
