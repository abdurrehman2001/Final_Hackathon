import firebase from "firebase";
import 'firebase/firestore';

const config = {
          apiKey: "AIzaSyBfBDt4H164cukWkzSz355ooIdfTXDudxw",
          authDomain: "final-hackathon-e1be6.firebaseapp.com",
          projectId: "final-hackathon-e1be6",
          storageBucket: "final-hackathon-e1be6.appspot.com",
          messagingSenderId: "921617524157",
          appId: "1:921617524157:web:4deae570aae3a18aed5ed4",
          measurementId: "G-6DJQEKNK43"
        };

const Firebase = firebase.initializeApp(config);
export default Firebase;