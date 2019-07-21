const express = require('express');
const app = express();
const port = 3000;

const index = function (request, response) {
    response.send('Hello World!');
}

app.get('/', index);

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});