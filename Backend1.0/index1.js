const express = require('express');
const { ButtonRouter } = require('./Router/ButtonRouter');
const { connectDB } = require('./config/Database');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/custom/api/',ButtonRouter)

// connection of Db
connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

