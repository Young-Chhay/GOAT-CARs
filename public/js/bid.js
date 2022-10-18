
// handle add Car Form
const bidHandler = async (event) => {
    event.preventDefault();
    
    const bid = document.querySelector('#bid-amount').value;
    const auction = document.querySelector('#auction-id').innerHTML;
    console.log(auction);
    if (!bid) {
        $('#alert-bid').removeClass('hide');
    } else {
        const response = await fetch(`/api/auction/${auction}`, {
            method: 'PUT',
            body: JSON.stringify({ bid }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/auction/bid/${auction}`)
        } else {
            alert('Failed to add bid')
        }
    }
  };    

// document.querySelector('.newPostForum').addEventListener('submit', newPostHandler);
$('.bid-form').on('submit', bidHandler);
