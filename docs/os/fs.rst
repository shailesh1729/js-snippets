File System
====================

NodeJS comes with an extensive file system API in a module called ``fs``.
However, the module is traditionally based on callbacks. In this book,
we will be focused on writing codes using promise based APIs which can
be easily used in ``async/await`` paradigm. Hence, we will use
a library named `fs-extra <https://www.npmjs.com/package/fs-extra>`_.


.. rubric:: Checking existence of a file

.. literalinclude:: existence.js
    :linenos:
    :emphasize-lines: 5

.. rubric:: Reading a file

.. literalinclude:: read_file.js
    :linenos:
    :emphasize-lines: 5
