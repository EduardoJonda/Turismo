import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

let config = {
    apiKey: "AIzaSyDQ_EU8KZ_CeTop8_XsaxXTSU494Rt71nE",
    authDomain: "gamificador-turismo.firebaseapp.com",
    databaseURL: "https://gamificador-turismo.firebaseio.com",
    projectId: "gamificador-turismo",
    storageBucket: "gamificador-turismo.appspot.com",
    messagingSenderId: "27107697578"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
