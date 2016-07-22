var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    connect = require('gulp-connect'),
    minifyHtml = require('gulp-minify-html');

gulp.task('js', function() {
  return browserify('./source/scripts/main.js')
        .transform(babelify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 4000
  });
});

gulp.task('scss', function() {
  gulp.src(['./source/styles/main.scss'])
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest('./build/styles/'))
})

gulp.task('html', function() {
  return gulp.src('./source/index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./build/'))
});

gulp.task('image', function() {
  return gulp.src('./source/img/*.{jpg, png}')
    .pipe(gulp.dest('./build/img'))
});

gulp.task('default', ['html', 'scss', 'js', 'image']);

gulp.task('server', ['html', 'scss', 'js', 'image', 'connect']);

