## Skeleton for quick started with express application.


### Run application

``` js
    "start": "node server.js",
    "watch": "NODE_ENV=development nodemon server.js",
    "w7watch": "nodemon server.js",
    "testwatch": "NODE_ENV=development mocha ./test  -G  -w -c -d",
    "w7testwatch": "mocha ./test  -G -c -d -w",
    "browserify": "browserify -t hbsfy public/javascripts/client.js > public/javascripts/bundle.js",
    "watchify": "watchify -t hbsfy public/javascripts/client.js -o public/javascripts/bundle.js"

```
###  Routes

Use root `routes.js` file to add server side routes

Use `public/javascripts/client/routes.js` to add client side routes (bacbone)


### Package Configured 
--------

``` js

{
  "name": "application-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node server.js",
    "watch": "NODE_ENV=development nodemon server.js",
    "w7watch": "nodemon server.js",
    "testwatch": "NODE_ENV=development mocha ./test  -G  -w -c -d",
    "w7testwatch": "mocha ./test  -G -c -d -w",
    "browserify": "browserify -t hbsfy public/javascripts/client.js > public/javascripts/bundle.js",
    "watchify": "watchify -t hbsfy public/javascripts/client.js -o public/javascripts/bundle.js"
  },
  "dependencies": {
    "express": "3.5.1",
    "jade": "*",
    "less-middleware": "~0.1.15",
    "config": "~0.4.35",
    "kue": "~0.7.5",
    "backbone": "^1.1.2",
    "jquery": "^2.1.0",
    "handlebars": "~1.3.0"
  },
  "devDependencies": {
    "mocha": "~1.18.2",
    "should": "~3.2.0",
    "hbsfy": "~1.3.2",
    "request": "~2.34.0",
    "superagent": "~0.17.0"
  }
}

```