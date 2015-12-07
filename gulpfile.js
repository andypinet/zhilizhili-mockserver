var gulp = require("gulp");
var zTask = require("require-dir")("../../zhilizhili-gulp-task/build").index;

var debug = false;

var paths = {
    srcRoot: 'resources/',
    destRoot: 'www/'
};

zTask.scope(gulp);

gulp.task('build-sass', function () {
    zTask.require('build-sass')({
        src: paths.srcRoot + 'assets/sass/**/*.scss',
        dest: paths.destRoot + 'static/css'
    });
});

gulp.task('watch', function(){
    gulp.watch(paths.srcRoot + 'assets/sass/**/*.scss', ['build-sass']);
});