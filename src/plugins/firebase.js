import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBZ1KzbUUIyWwTbrtcpxeb6Hs4UbP16vbQ",
    authDomain: "parkplatz-app-7ea3c.firebaseapp.com",
    databaseURL: "https://parkplatz-app-7ea3c.firebaseio.com",
    projectId: "parkplatz-app-7ea3c",
    storageBucket: "parkplatz-app-7ea3c.appspot.com",
    messagingSenderId: "1091275874357",
    appId: "1:1091275874357:web:35d34e9a33cbf97570117c",
    measurementId: "G-XW496LTQ42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore();
