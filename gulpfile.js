var gulp = require('gulp'),
    connect = require('gulp-connect'),
    spritesmith = require('gulp.spritesmith'),
    plugins = require('gulp-load-plugins')();
gulp.task('default', function() {

});
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 8000
    });
    gulp.watch('./src/sass/*.scss', ['sass']);
    gulp.watch('./view/*.html', ['html']);
});
gulp.task('spritesmith', function() {
    gulp.src('demo/*.png')
        .pipe(spritesmith({
            imgName: 'icons.png', // 生成的图片
            cssName: 'icons.css', //生成的sass文件
            padding: 0, // 图标之间的距离
            algorithm: 'left-right' // 图标的排序方式

        }))
        .pipe(gulp.dest('demo/'));
});
gulp.task('html', function() {
    gulp.src('./view/*.html')
        .pipe(connect.reload());
});
gulp.task('sass', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 7', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest("./dist/css"))
        .pipe(connect.reload());
});
gulp.task('minify-js', function() {
    gulp.src('./src/js/*.js')
        .pipe(plugins.uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('imagemin', function() {
    gulp.src('./src/images/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('./dist/images'));
});