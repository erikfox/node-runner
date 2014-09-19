var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var console = require('better-console');


gulp.task('nodemon', function() {
	nodemon({
		script: 'index.js'
	}).on('start', function() {
		
		console.clear();
		
	}).on('restart', function() {

		console.clear();
	});
});

gulp.task('default', ['nodemon']);
