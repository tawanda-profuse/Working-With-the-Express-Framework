const express = require('express');

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`, (err) => {
      if (err) {
        console.log(err);
        res.end(err.message);
      }
    });
  });

app.listen(2000, () => {
    console.log('Server has started listening on port 2000');
});