const NODE_ENV = process.env.NODE_ENV || 'development'
const GENERATE_SOURCEMAP = process.env.GENERATE_SOURCEMAP !== 'false'
const PUBLIC_URL = process.env.PUBLIC_URL || '/'

module.exports = {
  /** The environment to use when building the project */
  env: NODE_ENV,
  /** The full path to the project's root directory */
  basePath: __dirname,
  /** The name of the directory containing the application source code */
  srcDir: 'src',
  /** The file name of the application's entry point */
  main: 'main',
  /** The name of the directory in which to emit compiled assets */
  outDir: 'dist',
  /** The base path for all projects assets (relative to the website root) */
  publicPath: PUBLIC_URL,
  /** Whether to generate sourcemaps */
  sourcemaps: GENERATE_SOURCEMAP,
  /** A hash map of keys that the compiler should treat as external to the project */
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  /** A hash map of variables and their values to expose globally */
  globals: {},
  /** Whether to enable verbose logging */
  verbose: false,
  /** The list of modules to bundle separately from the core application code */
  vendors: [
    'axios',
    'redux',
    'react-redux',
    'reactstrap',
    'redux-thunk',
    'react-router-dom',
    'react-spinkit',
    'prop-types',
    'immutability-helper-x',
  ],
}
