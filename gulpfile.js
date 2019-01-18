var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var exec = require('child_process').exec;
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var tsify = require('tsify');
var uglify = require('gulp-uglify');

gulp.task('ng-build', function (done) {
    exec('ng build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);

        done(err);

        return true;
    });
});

gulp.task('content-script', function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: 'src/app/content-script.ts'
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('content-script.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', gulp.series(['ng-build', 'content-script'], function (done) {
    done();
}));
