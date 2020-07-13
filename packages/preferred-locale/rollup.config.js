import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import local from 'rollup-plugin-local-resolve'
import del from 'rollup-plugin-delete'
import pkg from './package.json'

const {
  sharedExternals,
  sharedGlobals,
  babelMain
} = require('../../config/presets')

const external = [
  ...sharedExternals
]

const globals = {
  ...sharedGlobals
}

const plugins = [
  local(),
  terser()
]

const pluginsMain = [
  babel(babelMain),
  ...plugins
]

export default [
  {
    input: 'src/index.js',
    plugins: [
      del({ targets: './lib/*' }),
      ...pluginsMain ],
    output: {
      file: `${pkg.unpkg}`,
      name: 'preferredLocale',
      format: 'umd',
      sourcemap: false,
      globals
    }
  },
  {
    input: {
      index: 'src/index.js'
    },
    external,
    plugins: pluginsMain,
    output: [
      {
        dir: 'lib',
        entryFileNames: '[name].js',
        format: 'cjs',
        sourcemap: false,
        globals
      },
      {
        dir: 'lib',
        entryFileNames: '[name].mjs',
        format: 'es',
        sourcemap: false,
        globals
      }
    ]
  }
]
