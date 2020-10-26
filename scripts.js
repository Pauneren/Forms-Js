function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }

    if(subject.length < 5){
        text = "Please Enter valid Subject";
        error_message.innerHTML = text;
        return false;
      }

      if(isNaN(phone) || phone.length != 10){//checking if the phone is a not a number or less than 10 characters
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
      }

      if(email.indexOf("@") == -1 || email.length < 5){//checking if the phone is a not a number or less than 10 characters
        text = "Please Enter valid Phone Email";
        error_message.innerHTML = text;
        return false;
      }

      if(message.length <= 20){
        text = "Please Enter more than 20 characters";
        error_message.innerHTML = text;
        return false;
      }

      alert("Form Submitted Succesfully!")

    return true;
}