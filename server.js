const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Best UK Transport Portal!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
