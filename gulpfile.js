const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

<<<<<<< HEAD
const ghPages = require('gulp-gh-pages');

=======
>>>>>>> parent of 59a4f26...  added gulp deploy
const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);
<<<<<<< HEAD
<<<<<<< HEAD

// Tell gulp to use the tasks just loaded
gulp.registry(hub);


gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));

// deploy project on gh-pages
gulp.task('deploy', () => {
=======
// deploy on gh-pages
gulp.task('deploy', function() {
>>>>>>> parent of 797e66f... deployed on gh-pages
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
=======

// Tell gulp to use the tasks just loaded
gulp.registry(hub);
>>>>>>> parent of 59a4f26...  added gulp deploy

gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.tmp('index.html'), reloadBrowserSync);
  done();
}

