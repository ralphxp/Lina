const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [require('tailwindcss')]);

mix.js('resources/js/lina.js', 'public/js/lina.js')
    .styles('resources/css/lina.css', 'public/css/lina.css')
    .styles('resources/css/bootstrap.css', 'public/css/bootstrap.css')
    .styles('resources/css/font-awesome.min.css', 'public/css/font-awesome.min.css');
mix.js('resources/js/quick-actions.js', 'public/js/quick-action.js');
mix.js('resources/js/linaAlerts.js', 'public/js/linaAlerts.js')
mix.js('resources/js/router.js', 'public/js/router.js');
mix.js('resources/js/font.awesome.min.js', 'public/js/font.awesome.min.js');
