
// handle add Car Form
const addCarHandler = async (event) => {
    event.preventDefault();


    const year = document.querySelector('#car-year').value;
    const make = document.querySelector('#car-make').value.trim();
    const model = document.querySelector('#car-model').value.trim();
    const value = document.querySelector('#car-value').value.trim();
    const image = document.querySelector('#car-image').value.trim();
    const description = document.querySelector('#car-description').value.trim();

    // console.log(year);
    // console.log(make);
    // console.log(model);
    // console.log(image);
    if (year && make && model && value && image && description) {
        const response = await fetch('/api/car', {
            method: 'POST',
            body: JSON.stringify({ year, make, model, value, image, description }),
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
