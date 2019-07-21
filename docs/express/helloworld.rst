Hello World
======================

Make sure that you have installed the express framework::

    npm install --save express



We require the express package::

    const express = require('express');

We create an express application instance::

    const app = express();

A web application essentially handles incoming requests at 
different (URL) endpoints and returns data (in form of HTML/text/JSON etc.) 
as response. To achieve this, we define different request handlers.
A request handler is a function with two arguments 
(``request`` and ``response``).
The request object captures all information about incoming HTTP request.
The response object provides methods for sending response HTTP headers and
data.

Here is a simple request handler function::

    const index = function (request, response) {
        response.send('Hello World!');
    }
    
We now tell the express framework about the endpoint for which
this request handler will be used::

    app.get('/', index);


We choose port number for the express web application::

    const port = 3000;

We now setup the express application to listen at the specified port.
If the listening starts successfully, then a callback will get called
informing us about it::

    app.listen(port, function() {
        console.log(`Example app listening on port ${port}!`);
    });

Here is the complete code. Please save it in a file named ``helloworld.js``.

.. literalinclude:: helloworld.js


We can start it by running::

    node helloworld.js

Time to head to http://localhost:3000 and see the result.

