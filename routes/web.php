<?php

use Illuminate\Support\Facades\Route;

Route::get('/{param?}/{any?}', function () {
    return view('app');
});
