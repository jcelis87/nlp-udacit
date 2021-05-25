const dotenv = require('dotenv');
dotenv.config({path: './../../.env' });

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

app.post('/send-url', (req, res) =>{
    console.log(req.body.url);

    const text = req.body.url;
    const analysis = nlpAnalysis (process.env.API_KEY, text, 'en')

    console.log(analysis);
    
    res.send(analysis);
    //res.send({URL:req.body.url});
});

function nlpAnalysis  (APIKEY, text2Analyze, lang) {
    
    const formdata = new FormData();
    formdata.append("key", APIKEY);
    formdata.append("txt", text2Analyze);
    formdata.append("lang", lang);  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const analysis = getNLPAnalysis(requestOptions)
    .then(response => console.log(response))
    .catch(error => console.log('error', error));

    return analysis;
};

const  getNLPAnalysis = async (requestOptions) =>{
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)

    const analysis = await response.json()

    return analysis;
};