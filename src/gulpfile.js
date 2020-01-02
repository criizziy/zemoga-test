var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var image = require('gulp-image');
var watch = require('gulp-watch');
gulp.task('sass-cmarp', function(){
	return gulp.src(['./assets/sass/main.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(autoprefixer('last 2 versions'))
		/*.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))*/
		.pipe(sourcemaps.write('./', {
			includeContent: false,
			sourceRoot: './assets/sass/main.scss'
		}))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.stream({match: '**/*.css'}));
});
gulp.task('uglify', function(){
	return gulp.src('./assets/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});
gulp.task('image', function () {
	gulp.src('./assets/img/*')
	  .pipe(image())
	  .pipe(gulp.dest('./dist/img/'));
});
gulp.task('watch',function(){
	gulp.watch('./assets/sass/*.scss', gulp.series('sass-cmarp'));
	gulp.watch('./assets/js/*.js', gulp.series('uglify'));
	gulp.watch('./js/*.js').on('change', browserSync.reload);
	gulp.watch('./assets/sass/*.scss').on('change', browserSync.reload);
	gulp.watch('**/*.html').on('change', browserSync.reload);
	//gulp.watch('**/*.html').on('change', browserSync.reload);
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('default', gulp.parallel('sass-cmarp', 'uglify', 'image','watch'));