import { createRequire } from 'node:module';

import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  /^ethereum-cryptography\//,
];

const sharedPlugins = [
  nodeResolve({ preferBuiltins: true }),
  commonjs(),
  json(),
  typescript({ tsconfig: './tsconfig.build.json', declaration: false, sourceMap: true }),
  terser(),
];

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external,
    plugins: sharedPlugins,
  },
  {
    input: 'src/index.ts',
    output: { file: pkg.types, format: 'es' },
    external,
    plugins: [dts({ tsconfig: './tsconfig.build.json' })],
  },
]);
