var gulp = require('gulp');
var to5 = require('gulp-6to5');
var concat = require("gulp-concat");

gulp.task('default', function () {
    return gulp.src('lib/*.js')
        .pipe(to5())
//        .pipe(concat("index.js"))
        .pipe(gulp.dest('dist'));
});
