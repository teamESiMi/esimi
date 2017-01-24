// BUILD TASKS FOR LABORISLOVE.COM

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var gzip = require('gulp-gzip');
var cleanCSS = require('gulp-clean-css');
 

// =================================================== HTML tasks
gulp.task('gzip-html', function() {
    gulp.src('*.html')
    .pipe(gzip({ append: false }))
    .pipe(gulp.dest('build'));
});

// =================================================== Styles (CSS) tasks
gulp.task('autoprefix', function() {
    gulp.src('css/main.css')
    .pipe(autoprefixer({
        browsers: ['>1%']
    }))
    .pipe(gulp.dest('build/css'))
});

gulp.task('minify-css', function() {
	return gulp.src('css/main.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'));
});

gulp.task('gzip-styles', function() {
    gulp.src('css/main.css')
    .pipe(gzip())
    .pipe(gulp.dest('build/css'));
});

// RUN ALL CSS TASKS

gulp.task('css', function() {
    gulp.src('css/main.css')
    .pipe(autoprefixer({
        browsers: ['>1%']
    }))
    .pipe(cleanCSS())
    .pipe(gzip())
    .pipe(gulp.dest('build/css')); 
});

// INLINE CSS TASK

gulp.task('inline-css', function() {
    gulp.src('css/inline-ignore.css')
    .pipe(autoprefixer({
        browsers: ['>1%']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('ignore')); 
});

// =================================================== Scripts (JS) tasks

gulp.task('gzip-scripts', function() {
    gulp.src('js/scripts.js')
    .pipe(gzip())
    .pipe(gulp.dest('build/js'));
});

/* NOT INCLUDING DUE TO NOT HAVING A JAVA JDK INSTALLED ON THIS COMPUTER -- WONT WORK AS IS
gulp.task('minify-scripts', function() {
    gulp.src('js/scripts.js')
    .pipe(closureCompiler({
      compilerPath: 'bower_components/closure-compiler/lib/vendor/compiler.jar',
      fileName: 'build.js'
    }))
    .pipe(gulp.dest('build/js'));
});
*/

// =================================================== Images tasks

gulp.task('images', function() {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
}
);

// ===================================== Gulp build -- run all

// ===================================== Gulp watch scripts 
// ===================================== Gulp watch styles
// ===================================== Gulp watch (both scripts and styles)