var gulp = require('gulp');
var csv2json = require('gulp-csv2json');
var rename = require('gulp-rename');
const shell = require('gulp-shell')
 
gulp.task('csv2json', async function () {
var csvParseOptions = {}; //based on options specified here : http://csv.adaltas.com/parse/
    gulp.src('src/csv/*.csv')
        .pipe(csv2json(csvParseOptions))
        .pipe(rename({extname: '.json'}))
        .pipe(gulp.dest('temp/csv2json'))
        .pipe(shell(['sh ./csv2jsonHelper.sh <%=file.path%> src/js/database/<%=file.basename%>']));
});