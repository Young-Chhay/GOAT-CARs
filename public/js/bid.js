
// handle add Car Form
const bidHandler = async (event) => {
    event.preventDefault();
    
    const bid = document.querySelector('#bid-amount').value;
    const auction = document.querySelector('#auction-id').innerHTML;
    console.log(auction);
    if (!bid) {
        $('#alert-bid').removeClass('hide');
    } else {
        const response = await fetch('/api/bid', {
            method: 'POST',
            body: JSON.stringify({ bid, auction }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/auction')
        } else {
            alert('Failed to add new car')
        }
    }
  };    

// document.querySelector('.newPostForum').addEventListener('submit', newPostHandler);
$('.bid-form').on('submit', bidHandler);
