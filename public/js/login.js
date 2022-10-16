// handle login form
// const loginFormHandler = async (event) => {
//     // Stop the browser from conituosly submitting the form so we can do so with JavaScript
//     event.preventDefault();
  
//     // Gather the data from the form elements on the page
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (email && password) {
//       // Send the e-mail and password to the server
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  const alertMsg = $('.alert-sentence');
// handle Signup form
  const signUpFormHandler = async (event) => {
    event.preventDefault();
    alertMsg.addClass('hide');
    $('#alert-signup').addClass('hide');
    $('#alert-term').addClass('hide');
    const firstName = document.querySelector('#signup-firstName').value.trim();
    const lastName = document.querySelector('#signup-lastName').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const password2 = document.querySelector('#signup-password2').value.trim();
    
  if (password !== password2) {
    
    alertMsg.removeClass('hide');
  } else if(!firstName || !lastName || !email || !password) {
    $('#alert-signup').removeClass('hide');
  } else if (!document.getElementById('signup-check').checked) {
    $('#alert-term').removeClass('hide');
    console.log('not checked!')
  } else {
    $('#signupModal').modal('hide');
    if (firstName && lastName && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { 'Content-Type': 'application/json' },
        
      });
      
      if (response.ok) {
        document.location.replace('/');
        console.log('working?');
      } else {
        alert(response.statusText);
      }
      
    }}
  };
  
  // document
  //   .querySelector('.login-form')
  //   .addEventListener('submit', loginFormHandler);

// $('.signup-form').addEventListener('submit', signUpFormHandler);
$('.signup-form').on('submit', signUpFormHandler)
  