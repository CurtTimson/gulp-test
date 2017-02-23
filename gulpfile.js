var gulp = require("gulp");

var less = require("gulp-less");

gulp.task('less', function(){
  return gulp.src("app/less/styles.less")
    .pipe(less())
    .pipe(gulp.dest('app/css'))
});
