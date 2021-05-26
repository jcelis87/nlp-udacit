import { checkURL } from './js/get_analysis.js';

//How to use env var here?
const URL = 'http://localhost:5000/send-url';

const form = document.getElementById('input-form');
form.addEventListener('submit', checkURL);





