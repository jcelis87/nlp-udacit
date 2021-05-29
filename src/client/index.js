import { checkURL } from './js/get_analysis.js';
import './styles/utilities.scss';
import './styles/header.scss';
import './styles/body.scss';
import './styles/footer.scss';

//How to use env var here?
const URL = 'http://localhost:5000/send-url';

const form = document.getElementById('input-form');
form.addEventListener('submit', checkURL);


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }




