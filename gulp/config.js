var dest = './build',
  src = './src',
  mui = './node_modules/material-ui/src',
  outputFileName = 'app.js',
  outputMinFile = 'app.min.js';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: outputFileName
    }],
    extensions: ['.jsx'],
  },
  minify: {
    src: dest + '/' + outputFileName,
    dest: dest
  }
};
