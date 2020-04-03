// Soft scroll for all browsers
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//   Input animation
const inputs = Array.from(document.getElementsByClassName('mc-field-group'));
inputs.map(inputWrapper => {
    inputWrapper.querySelector("input").addEventListener("focus", e =>{
        inputWrapper.querySelector('label').classList.add('label-focus');
    });
});
inputs.map(inputWrapper => {
    inputWrapper.querySelector("input").addEventListener("focusout", e =>{
        if (e.target.value === "") {
         inputWrapper.querySelector('label').classList.remove('label-focus');
        }
    });
});

//JS validation form
const forms = Array.from(document.getElementsByClassName("form-group"));
forms.map(form => {
  form.addEventListener("submit", e => {
    // Email validation
    e.preventDefault();
    let error = false;
    const regExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
    const emailInput = form.getElementsByClassName("email")[0];
    const emailValue = emailInput.value;
    if(emailValue != ""){
      if(regExpEmail.test(emailValue) === false) {
        emailInput.style.borderBottom = "3px solid red";
        form.getElementsByClassName("emailError")[0].innerHTML = "Invalid email address format";
        error = true;
      } else {
        form.getElementsByClassName("emailError")[0].innerHTML = "";
        emailInput.style.borderBottom = "1px solid #000";
      }
    } else {
      emailInput.style.borderBottom = "3px solid red";
      form.getElementsByClassName("emailError")[0].innerHTML = "Email address is required";
      error = true;
    }
    // Name validation
    const regExpName = /^[a-zA-zéèêâàçùûî'ïüÿë ]+$/;
    const namesInput = Array.from(form.getElementsByClassName("name"));
    namesInput.map(input => {
      if(input.value != ""){
        if(regExpName.test(input.value) === false) {
          input.style.borderBottom = "3px solid red";
          if(input.name === "FNAME") {
            form.getElementsByClassName("firstNameError")[0].innerHTML = "Only letters are allowed"; 
          }  else {
            form.getElementsByClassName("lastNameError")[0].innerHTML = "Only letters are allowed"; 
          }
          error = true;
        } else {
          input.style.borderBottom = "1px solid #000";
            if(input.name === "FNAME") {
              form.getElementsByClassName("firstNameError")[0].innerHTML = ""; 
            }  else {
              form.getElementsByClassName("lastNameError")[0].innerHTML = ""; 
            }
        }
      } else {
        input.style.borderBottom = "3px solid red";
        if(input.name === "FNAME") {
          form.getElementsByClassName("firstNameError")[0].innerHTML = "First name is required"; 
        }  else {
          form.getElementsByClassName("lastNameError")[0].innerHTML = "Last name is required"; 
        }
        error = true;
      }
      })
       // Phone validation
   const regExpPhone = /^[0-9-\+"" ]+$/;
   const phoneInput = form.getElementsByClassName("phone")[0];
   const phoneValue = phoneInput.value;
   if(phoneValue != ""){
    if(regExpPhone.test(phoneValue) === false) {
      phoneInput.style.borderBottom = "3px solid red";
      form.getElementsByClassName("phoneError")[0].innerHTML = "Invalid phone number format";
      error = true;
    } else {
      form.getElementsByClassName("phoneError")[0].innerHTML = "";
      phoneInput.style.borderBottom = "1px solid #000";
    }
  } else {
      phoneInput.style.borderBottom = "3px solid red";
      form.getElementsByClassName("phoneError")[0].innerHTML = "Phone number is required";
      error = true;
  }
    if (error) {
      return;
    } 
    form.submit();
    });

});