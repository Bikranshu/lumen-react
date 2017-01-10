<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;

class RoleTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Create admin role, id of 1
        $admin = new Role;
        $admin->name = 'Admin';
        $admin->description = 'Administrator Role';
        $admin->save();

        //id = 2
        $user = new Role;
        $user->name = 'Employee';
        $user->description = 'Employee Role';
        $user->save();

    }

}
