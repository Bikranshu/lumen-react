<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\User;

class UserTransformer extends TransformerAbstract
{
    /**
     * @return  array
     */
    public function transform(User $user)
    {
        return $user->attributesToArray();
    }
}