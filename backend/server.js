const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express();

const frontend = path.join(`${__dirname}/../frontend`);

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(`${frontend}/index.html`);
});

app.get('/image-list', (req, res) => {
    res.sendFile(`${frontend}/data.json`)
});

app.use('/public', express.static(`${frontend}/public`));
app.use('/dist', express.static(`${frontend}/dist`));

app.listen(9000, () =>{
    console.log('http://127.0.0.1:9000');
})