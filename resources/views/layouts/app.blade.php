<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" 
        content="
            width=device-width,  
            initial-scale=1.0, 
            maximum-scale=1.0, 
            user-scalable=0" />

    <link rel="manifest" href="{{ asset('manifest.json') }}" crossorigin="use-credentials">
    @auth 
    <meta name="userid" data-user="{{ Auth::user()->id ?? 0 }}">
    @endauth
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <meta name="theme-color" content="darkgreen">
    <meta name="apple-mobile-web-app-status-bar-style" content="darkgreen">



    <meta name="description" content="Connect to your Dates">
    <meta name="author" content="Rapha Samuel" />
    <title>{{ config('app.name', 'Lina Dates') }}</title>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/quick-action.js') }}" defer></script>
    <script src="{{ asset('js/linaAlerts.js') }}" defer></script>
    <script src="{{ asset('js/lina.js') }}" defer></script>
    <script src="{{ asset('js/font.awesome.min.js') }}" defer></script>
    <script src="{{ asset('js/router.js') }}" defer></script>

    <link rel="apple-touch-icon" href="{{ asset('drawables/lina-logo.png') }}">
    <link rel="shortcut icon" href="{{ asset('drawables/android/ic_launcher-web.png') }}">
    <link rel="touch-icon" href="{{ asset('drawables/lina-logo.png') }}">

    <link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet">
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
    <link href="{{ asset('css/lina.css') }}" rel="stylesheet">
    <link href="{{ asset('css/font-awesome.min.css') }}" rel="stylesheet">

</head>
<body >
    @auth() 
        <div id='app' class='app'>
        
            @include('layouts/nav/top') 
            @include('layouts/nav/side') 
        
        <main class="main">
            @yield('content')
        </main>
       
            @include('layouts/nav/bottom') 
        
        </div>
    @endauth
    @guest()
    <div id="renderer" class="renderer"></div>
    @endguest


    <div class="g-loader">
        <div class="loading" ></div>
    </div>
    <div class="camera">
        <button type="button" class="cam-close toggle-cam"><i class=" fa fa-arrow-left"></i></button>
        <video  autobuffer height="100" width="100">Not found</video>
        <div class="btns">
            <button><i class="fa fa-dot-circle"></i></button>
            <button><i class="fa fa-arrow-alt-h"></i></button>
        </div>
    </div>
</body>
</html>
