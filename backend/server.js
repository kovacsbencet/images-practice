const express = require("express")

const path = require("path")

const app = express();

const pathToFrontend = path.join(`${__dirname}/../frontend`);

app.use(express.json());
app.use('/public', express.static(`˛${pathToFrontend}/public`));

app.get('/', (req, res) => {
    res.sendFile(`${pathToFrontend}/index.html`);
});

app.get('/image-list', (req, res) => {
    res.sendFile(`${pathToFrontend}/data.json`)
});

app.listen(9000, () =>{
    console.log('http://127.0.0.1:9000');
})