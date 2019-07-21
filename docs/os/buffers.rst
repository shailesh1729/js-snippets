Buffers
============

Pure JavaScript doesn't have support for binary data. 
NodeJS has a separate data type called ``Buffer`` which provides
support for binary data (an array of bytes).

This is useful for working with file system and TCP/IP networking.

.. rubric:: Creating a buffer 

A buffer of 5 bytes without initialization::

    let data = new Buffer(5);

Creating a buffer from an array of values (values should be between 0 to 255)::

    let data = new Buffer([10 10 20 20 50]);


.. rubric:: Buffers and Strings

Converting a sting into a buffer::

    let data = new Buffer('hello text');

By default, strings are encoded in buffers using ``utf-8`` encoding.


Converting a string into a buffer using a specific encoding::

    let data = new Buffer('hello text', 'utf16le');
    data = new Buffer('hello text', 'utf-8');
    data = new Buffer('hello text', 'ascii');
    data = new Buffer('hello text', 'base64');





