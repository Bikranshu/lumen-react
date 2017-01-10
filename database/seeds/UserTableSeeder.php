<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon as Carbon;

class UserTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Add the master administrator, user id of 1
        $users = [
            [
                'first_name' => 'Krishna',
                'last_name' => 'Timilsina',
                'email' => 'admin@admin.com',
                'password' =>app('hash')->make('1234'),
                'status' => true,
                'created_at' => Carbon::now()
            ],
            [
                'first_name' => 'Hari',
                'last_name' => 'Sharma',
                'email' => 'user@user.com',
                'password' => app('hash')->make('1234'),
                'status' => true,
                'created_at' => Carbon::now()
            ],
        ];

        DB::table('users')->insert($users);
    }

}
