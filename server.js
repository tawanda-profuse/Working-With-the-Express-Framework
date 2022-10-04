const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send("/index.html");
    res.send(index.html);
});

app.listen(2000, () => {
    console.log('Server has started listening on port 2000');
});