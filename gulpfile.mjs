import pkg from 'gulp';
const { series, src, dest, watch } = pkg;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
//Mimificar imagenes
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

const sass = gulpSass(dartSass);

function minimage() {
    return src('src/img/**/*.{jpg,png,svg}')
        .pipe(imagemin())
        .pipe(dest('build/img'))
}
function css() {
    return src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css/'))
}
export function scss() {
    return watch('src/sass/**/*.scss', css)
}
function convertirWebp() {
    return src('src/img/**/*.{jpg,png}')
        .pipe(webp())
        .pipe(dest('build/img'))
}

export default series(convertirWebp, minimage, css, scss); 