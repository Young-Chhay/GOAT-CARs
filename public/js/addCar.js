
// handle add Car Form
const addCarHandler = async (event) => {
    event.preventDefault();


    const year = document.querySelector('#car-year').value;
    const make = document.querySelector('#car-make').value.trim();
    const model = document.querySelector('#car-model').value.trim();
    const image = document.querySelector('#car-image').value.trim();
    // console.log(year);
    // console.log(make);
    // console.log(model);
    // console.log(image);
    if (year && make && model && image) {
        const response = await fetch('/api/car', {
            method: 'POST',
            body: JSON.stringify({ year, make, model, image }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to add new car')
        }
    }
  };    

// document.querySelector('.newPostForum').addEventListener('submit', newPostHandler);
$('.add-car-form').on('submit', addCarHandler);
