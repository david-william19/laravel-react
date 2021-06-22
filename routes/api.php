<?php

use App\Http\Controllers\postController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/posts', [postController::class, 'show']);
Route::get('/posts/update-post/{id}', [postController::class, 'showById']);
Route::post('/create', [postController::class, 'create']);
Route::put('/update/{id}', [postController::class, 'update']);
Route::delete('/delete/{id}', [postController::class, 'delete']);
