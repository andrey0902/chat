
var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    notify        = require('gulp-notify'),
    minifyCss     = require('gulp-minify-css');



gulp.task('sass', function () {
return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('minCss',function () {
    return gulp.src('css/**/*.css')
        .pipe(minifyCss({KeepBreak:true}))
        .pipe(gulp.dest('app/css/'))
});

gulp.task('minJson', function () {
    gulp.src('./**/*.json')
        .pipe(jsonmin())
        .pipe(gulp.dest('./app/'));
});