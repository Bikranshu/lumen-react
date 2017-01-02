<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Account
 * @package App\Models
 * @author Krishna Prasad Timilsina <bikranshu.t@gmail.com>
 */
class Product extends Model
{
	protected $table = 'products';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'code','name', 'description', 'status', 'created_by',
	];

}