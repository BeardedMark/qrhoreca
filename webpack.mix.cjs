const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
.sass('resources/scss/reset.scss', 'public/css/reset.css')
.sass('resources/scss/app.scss', 'public/css')
.copyDirectory('resources/images', 'public/images')
.vue();