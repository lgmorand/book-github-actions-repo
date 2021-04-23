var gulp = require("gulp"), pug = require('gulp-pug-3'), runSequence = require('gulp4-run-sequence');;

gulp.task('pugToHtml', () => {
   return gulp.src('src/*.pug')
   .pipe(pug({
      pretty: true
   }))
   .pipe(gulp.dest('dest'));
 });


gulp.task('copy', () => {
   return gulp.src([
     "src/styles/*.*",
   ], {
     dot: true,
   })
   .pipe(gulp.dest('dest'));
 });

gulp.task('build', done => {
   runSequence(
     ['pugToHtml'],
     ['copy'],
     done
   );
 });