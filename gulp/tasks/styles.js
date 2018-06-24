var gulp = require('gulp');
var postcss= require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
importcss = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([ importcss, mixins, nested, cssvars, autoprefixer]))
    .on('error',function(e){
        console.log(e.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});