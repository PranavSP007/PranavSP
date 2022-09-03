import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFXRtN6K4wXJEtleq6uySaoTyjrI7WpeU",
  authDomain: "amz-clone-d7d2e.firebaseapp.com",
  projectId: "amz-clone-d7d2e",
  storageBucket: "amz-clone-d7d2e.appspot.com",
  messagingSenderId: "49611334847",
  appId: "1:49611334847:web:855b021dad6e184948120a",
  measurementId: "G-T5LRFEEDKZ",
};

//initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //realtime database of firebase
const auth = firebase.auth(); //to handle the sign-in

export { db, auth };
