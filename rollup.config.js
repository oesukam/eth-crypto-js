/**
 * @type {import('rollup').RollupOptions}
 */

import pkg from './package.json';

import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const isProduction = process.env.NODE_ENV === 'production';

const defaultOutput = {
  chunkFileNames: 'r/oci-[hash].js',
  esModule: true,
  exports: 'auto',
  generatedCode: 'es5',
  indent: false,
  interop: 'compat',
  sourcemap: 'inline',
  validate: true,
};

export default defineConfig({
  perf: true,
  logLevel: 'info',
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'commonjs',
      ...defaultOutput,
    },
  ],
  external: Object.keys(pkg.dependencies),
  plugins: [commonjs(), json(), nodeResolve(), isProduction && terser(), typescript({ tsconfig: './tsconfig.json' })],
});
