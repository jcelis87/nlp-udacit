const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

const fetch = require('node-fetch');
var FormData = require('form-data');

console.log(process.env.API_KEY);

//Start up the server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});

//Cors for Cross Origin Allowance
app.use(cors());

//Initialize the main project folder using dist forlder from Webpack
app.use(express.static('dist'));
//replaces body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/send-url', async (req, res) =>{
    console.log(req.body.url);
    console.log('HoLSDFG');

    const text = req.body.url;
    const analysis = await nlpAnalysis (process.env.API_KEY, text, 'en');

    res.send(analysis);
});

async function nlpAnalysis  (APIKEY, text2Analyze, lang) {
    
    console.log(APIKEY);
    console.log(text2Analyze);

    const formdata = new FormData();
    formdata.append("key", APIKEY);
    formdata.append("txt", text2Analyze);
    formdata.append("lang", lang);  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)    
    const status =  await response.status;
    const body =  await response.json();

    console.log(status);
    console.log(body);

    return body;
};

