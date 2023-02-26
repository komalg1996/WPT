// axios connect to express ? 
const express = require('express');
const bodyParser = require('body-parser');
const router = require('express').Router();
var cors = require('cors');
const axios = require('axios').default;

const app = express();
app.use(cors())

let data;
axios.get('https://rickandmortyapi.com/api/character').then(res => {
    data = res.data;
});

router.get('/', (req, res) => {
  res.send(data);
});

app.use('/', router);
app.use(bodyParser.json());
app.listen(3002, () => {
    console.log(`Port is dummy. At least it started.`);
});




