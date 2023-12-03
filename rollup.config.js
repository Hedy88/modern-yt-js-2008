import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
    input: "src/lib.ts",
    output: {
        file: "dist/yt-js.min.js",
        format: "iife",
        name: "ytModernJS",
        plugins: [ terser() ],
    },
    plugins: [
        typescript(),
        resolve(),
        babel({
            babelHelpers: "bundled"
        }),
    ],
};