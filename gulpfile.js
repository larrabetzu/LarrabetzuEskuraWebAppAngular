var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var htmlmin = require('gulp-htmlmin');
var prefix = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var st = require('node-static');
var lr = require('tiny-lr');
var livereload = require('gulp-livereload');
var reloadServer = lr();


// Sass
gulp.task('sass', function () {
  gulp.src('./src/stylesheets/styles.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./src/stylesheets'))
    .pipe(prefix('last 4 versions'))
    .pipe(csso())
    .pipe(gulp.dest('./dist/stylesheets'))
    .pipe(livereload(reloadServer));
});


// Html minification
gulp.task('minifyHtml', function () {
  gulp.src('./src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload(reloadServer));
});

// Views
gulp.task('views', function () {
  gulp.src('./src/views/*')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/views/'))
    .pipe(livereload(reloadServer));
    
});


// Compress Scripts
gulp.task('scripts', function () {
  gulp.src([
    './src/scripts/vendor/angular.js',
    './src/scripts/vendor/*.js',
    './src/scripts/app.js',
    './src/scripts/services/*.js',
    './src/scripts/factories/*.js',
    './src/scripts/controllers/*.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/scripts'))
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(livereload(reloadServer));
});


// Manifest for firefox OS
gulp.task('manifest', function () {
  gulp.src('./src/manifest.webapp')
    .pipe(gulp.dest('./dist'));
});


// Icons for firefox OS
gulp.task('icons', function () {
  gulp.src(['./src/icon-16.png', './src/icon-48.png', './src/icon-128.png'])
    .pipe(gulp.dest('./dist'));
});


// Server for development
gulp.task('server', function() {
  var http = require('http'),
  st = require('node-static'),
  opts = { cache: false },
  file = new st.Server('./src', opts),
  port = process.env.PORT || 3000;

  http.createServer(function (req,res){
    file.serve(req, res);
  }).listen(port);

  console.log("App running on http://localhost:%s", port);
});


// Server for dist
gulp.task('serverDist', function() {
  var http = require('http'),
  st = require('node-static'),
  opts = { cache: false },
  file = new st.Server('./dist', opts),
  port = process.env.PORT || 9000;

  http.createServer(function (req,res){
    file.serve(req, res);
  }).listen(port);

  console.log("App running on http://localhost:%s", port);
});


// Fonts
gulp.task('fonts', function () {
  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts/'))
    .pipe(livereload(reloadServer));
});


// Images
gulp.task('images', function () {
  gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
});


//Favicon
gulp.task('favicon', function () {
  gulp.src('./src/favicon.png')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist'));
});


// Watch
gulp.task('watch', function () {
  reloadServer.listen(35729, function (err) {
    if (err) {
      console.err(err);
    };
    gulp.watch('./src/stylesheets/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.html', ['minifyHtml', 'views']);
    gulp.watch(['src/scripts/**/*.js', '!src/scripts/app.min.js', '!src/scripts/vendor'], ['scripts']);
    gulp.watch('./src/fonts/*', ['fonts']);
  });
});


// Default
gulp.task('default', ['sass', 'minifyHtml', 'views', 'fonts', 'images', 'favicon', 'scripts', 'manifest', 'icons']);


// Development
gulp.task('dev', ['sass', 'minifyHtml', 'views', 'fonts', 'images', 'favicon', 'scripts', 'manifest', 'icons', 'server', 'watch']);


// Distribution
gulp.task('dist', ['sass', 'minifyHtml', 'views', 'fonts','images', 'favicon', 'scripts', 'manifest', 'icons', 'serverDist']);
