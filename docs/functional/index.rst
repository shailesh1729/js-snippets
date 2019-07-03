Functional Programming
===========================


Major libraries supporting functional programming in JavaScript

* `Ramda <https://ramdajs.com/>`_
* `Lodash <https://lodash.com/>`_


We will be primarily using Ramda for our examples below.

Importing the library::

     R = require('ramda');

Empty
------

Checking whether something is empty (an object or an array or a string)::

    > R.isEmpty({})
    true
    > R.isEmpty([])
    true
    > R.isEmpty('')  
    true             

This function will appropriately return ``false`` in other cases::

    > R.isEmpty(0)
    false
    > R.isEmpty(1)
    false
    > R.isEmpty(true)
    false
    > R.isEmpty(false)
    false
    > R.isEmpty(null)
    false
    > R.isEmpty(undefined)
    false
    > R.isEmpty(NaN)
    false
    > R.isEmpty({1: 2})
    false
    > R.isEmpty([1])
    false
    > R.isEmpty('a') 
    false            


Search
-------------------

Searching for the index of an object in a array::

    > R.findIndex(x => x == 2, [1, 2, 3]) 
    1

The index is 0 based. The first argument is a predicate
which returns true when a suitable search criterion is
satisfied. Here, we are looking for the first element in the
array whose value is 2. Hence the criterion is ``x == 2``.
The predicate function is written as an arrow function ``x => x ==2``.

When no element of the array satisfies the given predicate, it returns -1::

    > R.findIndex(x => x == 2, [1, 4, 3])
    -1

The index of the first match is returned always::

    > R.findIndex(x => x == 2, [1, 2, 2, 3])
    1

Searching in an array of objects based on the value of an attribute::

    > R.findIndex(x => x.v == 2, [{v : 4}, {v : 3}, {v: 2}])
    2

Finding the array element::

    > R.find(x => x == 2, [1, 2, 3])
    2
    > R.find(x => x == 2, [1, 4, 3])
    undefined
    > R.find(x => x == 2, [1, 2, 2, 3])
    2
    > R.find(x => x.v == 2, [{v : 4}, {v : 3}, {v: 2}])
    { v: 2 }

If there is no array element satisfying the criterion in the predicate,
then ``undefined`` is returned.

