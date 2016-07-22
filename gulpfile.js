var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('react', function() {
  return browserify('./source/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('dzone-news.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function() {
  return gulp.src('./source/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/'))
});

gulp.task('default', ['sass', 'react']);
