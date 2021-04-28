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
  
  
const patientRef = firebase.database().ref('contactformmessages');
 
  
  

patientRef.on('value', snapshot => {
      snapshot.forEach(snap => {
      const name = snap.child("name").val();
      const contact = snap.child("number").val();
      const doctor = snap.child("doctor").val();
      const reason = snap.child("reason").val();
	  const desc = snap.child("problem").val();

      $("#tbody1").append("<tr><td>" + name + "</td><td>" + contact+ "</td><td>" + doctor + "</td><td>" + reason +"</td><td>"  + desc +"</td></tr>");

});  
  });
  
  
  
  
  
  
  
  
  


  

