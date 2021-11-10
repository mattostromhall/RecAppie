<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('recipe_id')
                ->constrained()
                ->onDelete('cascade');
            $table->string('name');
            $table->unsignedInteger('quantity');
            $table->string('unit')->nullable();
            $table->integer('calories')->nullable();
            $table->integer('carbohydrates')->nullable();
            $table->integer('fat')->nullable();
            $table->integer('protein')->nullable();
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
        Schema::dropIfExists('ingredients');
    }
}
