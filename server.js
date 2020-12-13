const express = require('express');
const morgan = require('morgan'); //Morgan give info about each request
const cors = require('cors');

const app = express();
require('dotenv').config({
    path: './config/index.env'
});

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())

app.get('/',(req, res) => {
    res.send('test route => home page');
});

//Page not found
app.use((req, res)=> {
    res.status(404).json({
        msg : 'Page not found'
    })
});

const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log(`Server runnging on ${PORT}`)
})