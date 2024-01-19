import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

var isauthenticated = false;

const isCorrectPassword = (req, res, next) => {
    const userInput = req.body["password"];
    if (userInput === "ILoveProgramming"){
        isauthenticated = true;
    }
    next();
}

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;


app.use(express.urlencoded({extended: true}))
app.use(isCorrectPassword)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/check', (req, res) => {
    if (isauthenticated) {
        res.sendFile(__dirname + '/public/secret.html')
    }
    else{
        res.redirect(__dirname + '/public/index.html')
    }
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})