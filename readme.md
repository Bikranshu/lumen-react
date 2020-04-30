Lumen (Laravel Micro Framework) + ReactJS + AdminLTE + Webpack Boilerplate

## Prerequisites

- PHP >= 7.2
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- [NodeJs](https://nodejs.org/en/)
- [Composer](https://getcomposer.org/download/) - Package manager for PHP
- [NPM](https://npmjs.org/) - Node package manager
- [MySQL](https://www.mysql.com/downloads/) - Relational database management system (RDBMS)


## Installation
On the command prompt run the following commands:
```
 $ git clone https://github.com/Bikranshu/lumen-react.git
 $ cd lumen-react
 $ composer install
 $ npm install
 $ cp .env.example .env (edit it with your database information)
 $ php artisan jwt:secret
 $ php artisan migrate
 $ php artisan db:seed
 $ php -S localhost:8000 -t public/
 $ npm run watch
```
Credential:
- username: admin@admin.com
- password: 1234

## USEFUL LINK
- Lumen [https://lumen.laravel.com](https://lumen.laravel.com/)
- dingo/api [https://github.com/dingo/api](https://github.com/dingo/api)
- json-web-token(jwt) [https://github.com/tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth)
- transformer [fractal](http://fractal.thephpleague.com/)
- apidoc [apidocjs](http://apidocjs.com/)
- debug rest api [postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
- JavaScript library for building user interfaces - [React](https://facebook.github.io/react/)
- Predictable state container - [Redux](http://redux.js.org/)
- Promise based HTTP client - [Axios](https://github.com/mzabriskie/axios)
