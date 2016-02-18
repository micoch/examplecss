var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('css', function(){
	return gulp.src('./assets/styles.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./assets/dist'));
	});

gulp.task('default', ['css']);