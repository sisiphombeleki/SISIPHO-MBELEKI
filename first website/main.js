var config = {
    apiKey: "AIzaSyAakwDDIDR_4QH9Kys2s-Rqnmq7K30Y8cw",
    authDomain: "contact-form-30370.firebaseapp.com",
    databaseURL: "https://contact-form-30370.firebaseio.com",
    projectId: "contact-form-30370",
    storageBucket: "contact-form-30370.appspot.com",
    messagingSenderId: "705397896521",
    appId: "1:705397896521:web:63b0932a086f2b09641698",
    measurementId: "G-22PX59TJ41"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, phone, message);
  
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
  }