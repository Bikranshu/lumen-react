<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Models\User;
use App\Transformers\UserTransformer;


class UserController extends BaseController
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $users = $this->user->paginate(25);
        return $this->response->paginator($users, new UserTransformer);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {

        $user = $this->user->findOrFail($id);
        if (! $user) {
            return $this->response->errorNotFound();
        }

        return $this->response->item($user, new UserTransformer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->input(), [
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator->messages());
        }

        $attributes = [
            'email' => $request->get('email'),
            'password' => app('hash')->make($request->get('password')),
        ];
        $user = $this->user->create($attributes);
        $token = \Auth::fromUser($user);

        return $this->response->array(compact('token'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($id, Request $request)
    {
      return true;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        if (! $user) {
            return $this->response->errorNotFound();
        }

        if( !$user->delete() ) {
            return $this->response->errorInternal();
        }

        return $this->response->noContent();
    }


}
