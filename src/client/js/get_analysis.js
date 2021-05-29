import {injectResults} from './inject_results';
import {isURL} from './is_url.js';

const URL = 'http://localhost:5000/send-url';

const excludedProperties = ['sentence_list', 'sentimented_concept_list',
'sentimented_entity_list'];

export const checkURL = async (e) => {

    e.preventDefault();
    const url2analize = document.getElementById('url-input').value;
    const inputIsURL = isURL(url2analize);

    if (inputIsURL) {
        const response = await fetch (URL, {
            method: 'Post',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            body: JSON.stringify({url: url2analize}),
        });
        const sentimentResponse = await response.json();
        injectResults(sentimentResponse, excludedProperties);
    
        return sentimentResponse;
    }
};

