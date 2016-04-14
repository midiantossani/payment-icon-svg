var gulp = require('gulp');
var svgSprite = require("gulp-svg-sprites");

gulp.task('svg-sprites', function () {
  return gulp.src('icons/*.svg')
    .pipe(svgSprite({
        selector: "icon-card-%f",
        common: "ips"
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['svg-sprites']);