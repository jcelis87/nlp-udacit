const form = document.getElementById('input-form');



//How to use env var here?
const URL = 'http://localhost:5000/send-url';

const   checkURL = async (e) => {
    
    const url2analize = document.getElementById('url-input').value;
    e.preventDefault();
    console.log('hola Jose');

    const response = await fetch (URL, {
        method: 'Post',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        body: JSON.stringify({url: url2analize}),
    });
    const sentimentResponse = await response.json();

    console.log(sentimentResponse);
    return sentimentResponse;
};

form.addEventListener('submit', checkURL);


