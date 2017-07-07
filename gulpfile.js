var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var url     = require('url');
var browserSync = require('browser-sync').create();

//设置代理服务器
var proxy = require('proxy-middleware');
var proxyOptions = url.parse('http://localhost:50000/');
    proxyOptions.route = '/ajax';

gulp.task('serve',['copy'], function() {
    browserSync.init({
        server: {
            baseDir: "dist",
            routes: {
		        "/bower_components": "bower_components"
		    },
            middleware:[proxy(proxyOptions)]
                    
                
           
        },
        port:50001
    });

    gulp.watch(['src/*.*','src/**/*.*'],['copy'])
});

gulp.task('copy',function () {
	return gulp.src(['src/*.*','src/**/*.*'])
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream:true}));
})



