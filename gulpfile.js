var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    minifyHtml = require('gulp-minify-html');

gulp.task('react', function() {
  return browserify('./source/scripts/main.js')
        .transform(babelify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('scss', function() {
  gulp.src(['./source/styles/main.scss'])
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest('./build/styles/'))
})

gulp.task('index', function() {
  return gulp.src('./source/index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./build/'))
});

gulp.task('image', function() {
  return gulp.src('./source/img/*.{jpg, png}')
    .pipe(gulp.dest('./build/img'))
});

gulp.task('default', ['index', 'scss', 'react', 'image']);
