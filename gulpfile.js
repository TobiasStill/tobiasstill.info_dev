var site = "tobiasstill.info"

// Add our dependencies
var gulp = require('gulp'), // Main Gulp module
    gulp_concat = require('gulp-concat'), // Gulp File concatenation plugin
    gulp_rename = require('gulp-rename'), // Gulp File concatenation plugin
    gulp_uglify = require('gulp-uglify'); // Gulp File concatenation plugin

// Configuration
var configuration = {
    paths: {
        src: {
            js: './www/assets/js/*.js',
            site: './www/site/**',
            assets: './www/assets/**'
        },
        tmp: './tmp',
        dist: {
            js: './www/assets',
            site: 'C://xampp/htdocs/' + site + '/site',
            assets: 'C://xampp/htdocs/' + site + '/assets'
        }
    }
};

// Gulp task to uglify js
gulp.task('js', function (done) {
    gulp.src(configuration.paths.src.js)
        .pipe(gulp_concat('concat.js')) //this will concat all the files into concat.js
        .pipe(gulp.dest(configuration.paths.tmp)) //this will save concat.js in a temp directory defined above
        .pipe(gulp_rename('uglify.js')) //this will rename concat.js to uglify.js
        .pipe(gulp_uglify()) //this will uglify/minify uglify.js
        .pipe(gulp.dest(configuration.paths.dist.js)); //this will save uglify.js into destination Directory defined above
    done();
});

// Gulp tasks to copy static files to xampp directory
gulp.task('site', function(done) {
    gulp.src(configuration.paths.src.site)
        .pipe(gulp.dest(configuration.paths.dist.site));
        done();
});
gulp.task('assets', function(done) {
    gulp.src(configuration.paths.src.assets)
        .pipe(gulp.dest(configuration.paths.dist.assets));
        done();
});

// Gulp default task
gulp.task('default', gulp.series('js', 'site', 'assets'));
