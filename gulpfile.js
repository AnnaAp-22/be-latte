var browserSync = require('browser-sync'),
  gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  // fonts = require('postcss-font-magician'),
  sass = require('gulp-sass'),
  media = require('gulp-group-css-media-queries'),
  imagemin = require("gulp-imagemin"),
  del = require("del"),
  run = require("run-sequence"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename"),
  svgstore = require("gulp-svgstore"),
  svgmin = require("gulp-svgmin"),
  notify = require('gulp-notify');
  // pug = require('gulp-pug');


gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'assets'
    },
    notify: false
  })
});


gulp.task('style', function () {
  const processor = ([
    autoprefixer({browsers: ['last 5 version']}),
   cssnano()
    // fonts()
  ]);
  return gulp.src('./assets/sass/style.sass')
    // .pipe(plumber())
    // .pipe(sass())
    .pipe(sass().on('error', notify.onError()))
    .pipe(postcss(processor))
    .pipe(media())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('serv', ['style', 'browserSync'], function () {
  gulp.watch('assets/sass/**/*.sass', ['style']);
  // /gulp.watch(['assets/*.pug', 'assets/pug/**/*.pug'], ['pug']);
  gulp.watch(['assets/*.html', 'assets/js/**/*.js'], browserSync.reload);
});
gulp.task("symbols", function () {
  return gulp.src("assets/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("assets/img"));
});
gulp.task("images", function () {
  return gulp.src("assets/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("assets/img"));
});

// gulp.task('default', ['watch']);
