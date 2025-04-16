const express = require('express');
const { ButtonRouter } = require('./Router/ButtonRouter');
const { connectDB } = require('./config/Database');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: '*',
  credentials: true
}))


app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/custom/api/',ButtonRouter)

// connection of Db
connectDB();

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

