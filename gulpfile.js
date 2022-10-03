const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');

function gulpSass(){
    return  gulp
            .src('src/scss/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError) )
            .pipe(autoprefixer({ cascade: false }))
            .pipe(gulp.dest('./'));
}
function gulpJs(){
    return  gulp 
            .src('src/js/*js')
            .pipe(concat('script.js'))
            .pipe(babel({presets: ['@babel/env']}))
            .pipe(uglify())
            .pipe(gulp.dest('./dist/js/'));
}
function watch(){
    gulp.watch('src/scss/*.scss', gulpSass);
}

gulp.task('watch', watch);
gulp.task('sass', gulpSass);
gulp.task('default', gulp.parallel('watch', 'sass'));

