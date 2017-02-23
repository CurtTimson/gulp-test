var gulp = require("gulp");

var less = require("gulp-less");

var lessPath = "app/less/**/*.less";
var lessTask = "less";

gulp.task(lessTask, function(){
  return gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest('app/css'))
});

gulp.task('less-watch', function(){
  gulp.watch(lessPath, [lessTask]);
});


var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');

gulp.task('css-useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});
