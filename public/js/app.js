// Initialize Firebase
var config = {
  apiKey: "AIzaSyBMLE8weG3ca_9PwPXRHPha6WLFkiiSnZY",
  authDomain: "jahnava-548da.firebaseapp.com",
  databaseURL: "https://jahnava-548da.firebaseio.com",
  projectId: "jahnava-548da",
  storageBucket: "jahnava-548da.appspot.com",
  messagingSenderId: "603228140353"
};
firebase.initializeApp(config);

var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child("text");
dbRef.on('value', snap => bigOne.innerText = snap.val());
