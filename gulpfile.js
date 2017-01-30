var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));
var gulp = require('gulp');

gulp.task('deploy', function() {
  var remotePath = '/';
  var conn = ftp.create({
    host: '54.254.254.167',
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp.src(['./**/*', './**/*.css','!./node_modules/**'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});