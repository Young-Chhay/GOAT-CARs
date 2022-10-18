const auctionPostFormHandler = async (event) => {
    event.preventDefault();
    
    const carName = $('#new-auction-car').value().trim();
    const startDate = $('#new-auction-start-date').value().trim();
    const endDate = $('#new-auction-end-date').value().trim();
    const startingBid = $('#new-auction-starting-bid').value().trim();
    
    

    
    if (carName && startDate && endDate && startingBid) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, firstName, lastName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
      
    }
  };
  
  // document
  //   .querySelector('.login-form')
  //   .addEventListener('submit', loginFormHandler);

// $('.signup-form').addEventListener('submit', signUpFormHandler);
$('.signup-form').on('submit', signUpFormHandler);
$('.login100-form').on('submit', loginFormHandler);

function emptyForum() {
    $('input:text').val("");
}
