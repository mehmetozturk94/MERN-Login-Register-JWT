const express = require('express');
const morgan = require('morgan'); //Morgan give info about each request
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('dotenv').config({
    path: './config/index.env'
});

//MongoDB
const connectDB = require('./config/db');
connectDB();

app.use(morgan('dev'));
app.use(cors());

//routes
app.use('/api/user/', require('./routes/auth.route'))
app.use('/api/category/', require('./routes/category.route'))


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
    console.log(`Server running on Port ${PORT}`)
})