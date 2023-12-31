<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// Маршрут "catch-all" для всех запросов, кроме существующих маршрутов
// Все такие запросы будут направлены на шаблон 'index'
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
