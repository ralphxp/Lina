<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\QuestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class,'index']);

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/me', [HomeController::class, 'me']);
Route::get('/fireworks', [HomeController::class, 'fireworks']);
Route::get('user/profile', [UserController::class, 'profile']);
Route::get('/me/info/{id}', [HomeController::class, 'info']);

Route::post('/me/{id}', [HomeController::class, 'update']);

// Quest Routes

Route::post('/quest/create/{id}', [QuestController::class, 'add']);
Route::post('/quest/delete/{id}', [QuestController::class, 'delete']);
Route::post('/quest/view/{id}', [QuestController::class, 'view']);