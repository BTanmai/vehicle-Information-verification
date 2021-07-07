import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBIO5KfXlylSFFuncwsQhIetKybGzsTi5Y",
  authDomain: "facebook-clone-99968.firebaseapp.com",
  databaseURL: "https://facebook-clone-99968.firebaseio.com",
  projectId: "facebook-clone-99968",
  storageBucket: "facebook-clone-99968.appspot.com",
  messagingSenderId: "47771076279",
  appId: "1:47771076279:web:6c59466093cca3b63daf32",
  measurementId: "G-60ZMFR8862"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = new firebase.storage();
export { auth, storage };
export default db;