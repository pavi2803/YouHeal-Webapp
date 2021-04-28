var firebaseConfig = {
    apiKey: "AIzaSyDRpsbu1FOQ6iB2vOkJyvdAtGceotdaN08",
    authDomain: "youheal-cd79b.firebaseapp.com",
    databaseURL: "https://youheal-cd79b-default-rtdb.firebaseio.com",
    projectId: "youheal-cd79b",
    storageBucket: "youheal-cd79b.appspot.com",
    messagingSenderId: "590525929587",
    appId: "1:590525929587:web:16e3cec6d7dac72fcc7206",
    measurementId: "G-RR87HTW2EQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  
 var messagesRef = firebase.database().ref('customerorders');
 
 
 
 
$('#OrderForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        number: $('.number').val(),
		address: $('.address').val(),
        medicine: $('.medicine').val(),
        payment: $('.payment').val()
    });
 
    $('.success-message').show();
 
    $('#OrderForm')[0].reset();
});








