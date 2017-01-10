<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Role
 * @package App\Models\Role
 * @author Krishna Prasad Timilsina <bikranshu.t@gmail.com>
 */
class Role extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'roles';

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     *
     */
    public $timestamps = false;

    /**
     * @return mixed
     */
    public function users()
    {
        return $this->belongsToMany('App\Models\User', 'link_user_roles', 'role_id', 'user_id');
    }

}
