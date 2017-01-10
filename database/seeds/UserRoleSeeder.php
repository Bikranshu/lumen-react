<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon as Carbon;

class UserRoleSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userRole = [
            [
                'role_id' => 1,
                'user_id' => 1,
                'created_by' => 1,
                'created_at' => Carbon::now()
            ],
            [
                'role_id' => 2,
                'user_id' => 2,
                'created_by' => 1,
                'created_at' => Carbon::now()
            ],
        ];

        DB::table('link_user_roles')->insert($userRole);

    }

}
