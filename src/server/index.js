const dotenv = require('dotenv');
dotenv.config({path: './../../.env' });

const fetch = require('node-fetch');
var FormData = require('form-data');

console.log(process.env.API_KEY);


const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", `Hello World`);
formdata.append("lang", 'en');  // 2-letter code, like en es fr ...

const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};


const  getNLPAnalysis = async (requestOptions) =>{
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    const status = await response.status;
    const body = await response.json();

    return [status, body];
};


getNLPAnalysis(requestOptions).then(response => console.log(...response))
.catch(error => console.log('error', error));