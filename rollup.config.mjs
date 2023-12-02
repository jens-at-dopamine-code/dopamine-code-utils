import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    external: [],
    input: 'src/index.ts',
    onwarn: (warning, defaultHandler) => {
      if (
        [
          'INVALID_ANNOTATION',
          'THIS_IS_UNDEFINED',
          'MODULE_LEVEL_DIRECTIVE',
        ].includes(warning.code) &&
        warning.id.includes('node_modules')
      ) {
        return;
      }
      defaultHandler(warning);
    },
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: 'src',
          paths: {
            '@/*': ['./*'],
          },
        },
      }),
    ],
  },
];
