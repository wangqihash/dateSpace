import gulp from 'gulp';
import gulpif from 'gulp-if';
import stylus from 'gulp-stylus';
// import connect from 'gulp-connect';
import livereload from 'gulp-livereload';
import args from './util/args';


gulp.task('css', () => {
    return gulp.src('app/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('server/public'))
        .pipe(gulpif(args.watch, livereload()));
        // .pipe(connect.reload())
});
gulp.task('font', () => {
    return gulp.src('app/css/font/*.*')
        .pipe(gulp.dest('server/public/css/font'))
    // .pipe(connect.reload())
});
