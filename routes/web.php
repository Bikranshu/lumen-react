<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

//$router->get('/', function () use ($router) {
//    return $router->app->version();
//});

$router->get('/', function () {
    return view('dashboard');
});

$api = app('Dingo\Api\Routing\Router');

// v1 version API
// choose version add this in header    Accept:application/vnd.lumen.v1+json
$api->version('v1', ['namespace' => 'App\Http\Controllers\Api\V1'], function ($api) {
    // login
    $api->post('auth/login', 'AuthController@login');
    // refresh jwt token
    $api->post('auth/login/refresh', 'AuthController@refreshToken');
    // need authentication
    $api->group(['middleware' => 'api.auth'], function ($api) {
        // User
        $api->get('user', 'UserController@index');
        $api->get('user/{id}', 'UserController@show');
        $api->post('user', 'UserController@store');
        $api->put('user/{id}', 'UserController@update');
        $api->delete('user/{id}', 'UserController@destroy');
        // Product
        $api->get('product', 'ProductController@index');
        $api->get('product/{id}', 'ProductController@show');
        $api->post('product', 'ProductController@store');
        $api->put('product/{id}', 'ProductController@update');
        $api->delete('product/{id}', 'ProductController@destroy');
    });
});

