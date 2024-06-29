import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from "rollup-plugin-copy";

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        terser(),
        copy({
            targets: [
                {src: 'src/*.html', dest: 'dist'},
                {src: 'styles/*.css', dest: 'dist/styles/'},
                {src: 'static/*', dest: 'dist/static/'}
            ]
        })
    ]
};