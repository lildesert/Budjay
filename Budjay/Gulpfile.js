var gulp = require('gulp');
var mainBowerFiles = require('gulp-main-bower-files');
var inject = require('gulp-inject');

gulp.task('main-bower-files', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(gulp.dest('./www/libs'));
});

gulp.task('InjectFiles', function () {
    var target = gulp.src('./www/index.html'); 
    var sources = gulp.src(['./www/libs/**/*.js', './www/libs/**/*.css'], { read: false });

    return target.pipe(inject(sources, { relative: true }))
      .pipe(gulp.dest('./www'));
});