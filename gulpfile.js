var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprites');
var svgmin = require('gulp-svgmin');

gulp.task('svg-sprites', function () {
  return gulp.src('icons/*.svg')
    .pipe(svgSprite({
        selector: "icon-card-%f",
        common: "ips"
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('optimize-svg', function() {
	return gulp.src('svg/sprite.svg')
        .pipe(svgmin({
            plugins: [{
            	convertPathData:{
				    floatPrecision: 0.4,
				}
            }]
        }))
	.pipe(gulp.dest('./svg'));
})

gulp.task('default', ['svg-sprites'], function(){
	return gulp.start('optimize-svg');
});
