<?php

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Route;

use function Pest\Laravel\get;

Route::get('/users', function() {
    return UserResource::collection(User::all());
});
