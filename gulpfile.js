var gulp = require("gulp"), 
    browserSync = require('browser-sync'); 
//сервер  
gulp.task('server', function () {   
  browserSync({ 
    port: 9000, 
    server: { 
      baseDir: 'app' 
    } 
  }); 
}); 
//слежка за файлами
gulp.task('watch', function () { 
  gulp.watch([ 
    'app/*.html', 
    'app/js/**/*.js', 
    'app/css/**/*.css' 
  ]).on('change', browserSync.reload); 
}); 
 
gulp.task('default', ['server', 'watch']);