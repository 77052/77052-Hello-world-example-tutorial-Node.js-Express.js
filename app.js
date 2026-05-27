const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Piotr Malczyk 77052');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});