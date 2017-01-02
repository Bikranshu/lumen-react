<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Auth\AuthManager;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class AuthController extends BaseController
{
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

    /**
     * Handle a login request to the application.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator->messages());
        }
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        // attempt to verify the credentials and create a token for the user
        if (! $token = \Auth::attempt($credentials)) {
            $this->response->errorForbidden(trans('auth.incorrect'));
        }
        // all good so return the token
        return $this->response->array(compact('token'));
    }

    public function refreshToken()
    {
        $token = \Auth::refresh();
        return $this->response->array(compact('token'));
    }


}
