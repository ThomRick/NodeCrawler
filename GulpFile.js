var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var tsc = require("gulp-typescript");
var mocha = require("gulp-mocha");

var tscOptions = {
    allowJs: true,
    diagnostics: true,
    listFiles: true,
    pretty: true,
    removeComments: true,
    target: "es5"
};

var builTasks = [
    "compile-main",
    "compile-test",
    "test"
];
 
gulp.task("compile-main", function () {
    return gulp.src("src/main/**/*.ts")
               .pipe(tsc(tscOptions))
               .pipe(gulp.dest("target/local/main"));
});

gulp.task("compile-test", function() {
    return gulp.src("src/test/**/*.ts")
               .pipe(tsc(tscOptions))
               .pipe(gulp.dest("target/local/test"));
});

gulp.task("test", function() {
    return gulp.src("target/local/test/**/*.js")
               .pipe(mocha({
                    reporter: "spec"
               }))
               .on("error", gulpUtil.log);
});

gulp.task("default", builTasks, function() {
    gulp.watch("src/**/*.ts", builTasks);
});