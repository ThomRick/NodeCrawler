var config = require("./config.json");
var gulp = require("gulp");
var util = require("gulp-util");
var clean = require("gulp-clean");
var tsc = require("gulp-typescript");
var mocha = require("gulp-mocha");
var browserify = require("gulp-browserify");

// Server build tasks
gulp.task("compile-server", function() {
    return gulp.src("src/server/**/*.ts")
    .pipe(tsc(config.typescript.options))
    .pipe(gulp.dest("target/local/server"));
});

gulp.task("test-server", [ "compile-server" ], function() {
    return gulp.src("target/local/server/test/**/*.js")
    .pipe(mocha(config.mocha.options));
});

gulp.task("install-server-properties", [ "test-server" ], function() {
    return gulp.src("src/server/main/resources/*.properties")
    .pipe(gulp.dest("target/build/resources"));
});

gulp.task("install-server", [ "install-server-properties" ], function() {
    return gulp.src("target/local/server/main/**")
    .pipe(gulp.dest("target/build"));
});

// Cli build tasks
gulp.task("compile-cli", [ "install-server" ], function() {
    return gulp.src("src/cli/**/*.ts")
    .pipe(tsc(config.typescript.options))
    .pipe(gulp.dest("target/local/cli"));
});

gulp.task("test-cli", [ "compile-cli" ], function() {
    return gulp.src("target/local/cli/test/app/**/*.js")
    .pipe(mocha(config.mocha.options))
});


// gulp.task("install-cli", [ "bundle-cli" ], function() {
gulp.task("deploy-cli-statics", [ "test-cli" ], function() {
    return gulp.src([ 
        "src/cli/main/**",
        "!src/cli/main/app/**"
    ])
    .pipe(gulp.dest("target/build/resources/public"));
});

gulp.task("install-cli", [ "deploy-cli-statics" ], function() {
    return gulp.src("target/local/cli/main/app/**")
    .pipe(browserify({
        insertGlobals: false
    }))
    .pipe(gulp.dest("target/build/resources/public/app"));
});

// Binary build tasks
gulp.task("install-windows-binaries", function() {
    return gulp.src([
        "bin/node.exe",
        "src/scripts/start.bat"
    ])
    .pipe(gulp.dest("target/build/bin"));
});

// Common tasks
gulp.task("install-windows", [ "install-server", "install-cli", "install-windows-binaries" ], function() {
    
});

gulp.task("clean", function() {
    return gulp.src("target/**")
    .pipe(clean());
});