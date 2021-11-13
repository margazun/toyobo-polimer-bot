const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');

const tsProject = ts.createProject('tsconfig.json');
const outputDir = './app/dist';
const sourceDir = './app/src/**/*';
const sourceDirTS = `${sourceDir}.ts`;
const timeout = 1000;

function clean() {
  return del(outputDir);
}

function build() {
  return gulp.src(sourceDirTS)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(tsProject()).js
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: '.'
    }))
    .pipe(gulp.dest(outputDir));
}

const defaultTask = gulp.series(clean, build);

function watchTask() {
  gulp.watch(sourceDirTS, build);
}

function testTask(done) {
  return nodemon({
    script: `${outputDir}/index.js`,
    watch: outputDir,
    delay: timeout.toString(),
    done,
  })
}

function devTask(done) {
  watchTask();
  gulp.series(defaultTask, testTask)(done);
}

exports.default = defaultTask;
exports.watch = watchTask;
exports.test = testTask;
exports.dev = devTask;