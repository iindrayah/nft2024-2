import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';

const config = {
  input: 'src/components/CollectionGallery/index.js',
  external: [
    'react',
    '@mui',
  ],
  output: {
    format: 'umd',
    name: 'CollectionGallery',
    globals: {
      react: "React"
    }
  },
  plugins: [
    postcss({
      extract: true,
      plugins: [
        autoprefixer,
      ],
    }),
    nodeResolve({
      moduleDirectories: [
        'src',
        'node_modules'
      ]
    }),
    babel({
      babelHelpers: 'bundled'
    }),
    commonjs(),
    uglify()
  ],
};

export default config