const express = require('express');
const { ButtonRouter } = require('./Router/ButtonRouter');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/custom/api/',ButtonRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

