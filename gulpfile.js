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
