var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'autopre'], function() {

    browserSync.init({
        tunnel: true,
        server: "."
    });

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./css/main.css", ['autopre']);
    gulp.watch("./scripts/*.js").on('change', browserSync.reload);
    gulp.watch("./html/*.html").on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

//prefixes css for all the browzerz
gulp.task('autopre', function () {
    return gulp.src('./css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['serve']);

