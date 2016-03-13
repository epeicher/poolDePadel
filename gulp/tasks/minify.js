var gulp 	= require('gulp');
var config 	= require('../config').minify;
var uglify 	= require('gulp-uglify');

gulp.task('minify', function () {
   gulp.src(config.src)
      .pipe(uglify())
      .pipe(gulp.dest(config.dest));
});
