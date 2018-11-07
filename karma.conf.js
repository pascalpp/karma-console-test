module.exports = (config) => {
    config.set({
      client: {captureConsole: true},
      frameworks: ['mocha'],
      files: ['script.js'],
      browsers: ['PhantomJS'],
      singleRun: false,
    })
  };
