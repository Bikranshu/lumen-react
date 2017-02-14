Lumen 5.3 Framework + ReactJS + AdminLTE

## Technology Used
- Lumen 5.3
- React
- Redux
- Webpack
- AdminLTE


## Requirements

- PHP >= 5.6.4
- NodeJs
- [Composer](https://getcomposer.org/download/) - Package manager for PHP
- [NPM](https://npmjs.org/) - Node package manager


## Installation

- clone app from repository:
(```$ git clone https://github.com/Bikranshu/lumen-react.git```)
- go to project folder
- run the following command on terminal 
```
 $ composer install
 $ npm install
 $ cp .env.example .env
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

- dingo/api [https://github.com/dingo/api](https://github.com/dingo/api)
- json-web-token(jwt) [https://github.com/tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth)
- transformer [fractal](http://fractal.thephpleague.com/)
- apidoc [apidocjs](http://apidocjs.com/)
- debug rest api [postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
- api doc [http://lumen.lyyw.info/apidoc](http://lumen.lyyw.info/apidoc)

