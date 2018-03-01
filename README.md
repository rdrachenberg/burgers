# Burgers

## Description
This app will create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.

## Technologies 
- MySQL
- Node.js

## Dependancies 
- express.js
- handlebars.js
- ORM -- Object -- Relational -- Mapper


### Overview
* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.


## Technologies 
- MySQL, 
- Node, 
- Express, 
- Handlebars
- Custom ORM
- MVC design pattern;
- Node and MySQL
  -  Query and route data and Handlebars to generate HTML.

## Dependancies 
- express
- express-handlebars
- body-parser
- MySQL

* `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

## Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -

## Hosting on Heroku


