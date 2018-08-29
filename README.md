Redux/React Login
=================

What it is?:
---------------
This is an example how a login and secured area can be implemented with react/redux.

How it works?:
---------------

This is based on this solution:

[https://github.com/joshgeller/react-redux-jwt-auth-example](https://github.com/joshgeller/react-redux-jwt-auth-example)

Is a classic JWT solution and the auth check is performed from the Authenicated component.
Compared to joshgeller solution I've added a cookie which stores the token


To get started:
---------------

Ensure you have Node v8.* installed. Use [nvm](https://github.com/creationix/nvm) to manage your versions.
cd into the root of the cloned repo.
Run the following command to install your dependencies:
```
npm install

(if you prefer yarn: yarn)

npm start
```

To acess the login use admin && password

Development:
------------

**Method 1:**
The fastest way to develop this app is to run the following command and navigate to [http://localhost:8001](http://localhost:8001) in your browser.


---------------------------
Unit Testing:
------------
***Be sure your node_modules are up to date!***


(not tests written)
To run the test:

```sh
npm test
```
now ensure when creating new files they follow this syntax otherwise the tests will not get picked up `{name}-test.js`

folder structure:

```
─┬ src
 ├─┬ components
 │ ├─┬ componentA
 │ │ ├── ComponentA-test.js
 │ │ └── ComponentA.js
 │ └─┬ ComponentB
 │   ├── ComponentB-test.js
 │   └── ComponentB.js
```
