<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_info', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("user_id");
            $table->string("FullName")->nullable();
            $table->string("country")->nullable();
            $table->string("state")->nullable();
            $table->string("city")->nullable();
            $table->string("address")->nullable();
            $table->string("job")->nullable();
            $table->string("income")->nullable();
            $table->string("daily_spend")->nullable();
            $table->string("race")->nullable();
            $table->string("hair_color")->nullable();
            $table->string("eye_color")->nullable();
            $table->string("gender")->nullable();
            $table->string("marital_status")->nullable();
            $table->string("education")->nullable();
            $table->string("relationship")->nullable();
            $table->string("woman")->nullable();
            $table->date("dob")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_info');
    }
}
