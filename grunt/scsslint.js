module.exports = {
  default: {
    src: ['sass/**/*.scss'],
    options: {
      bundleExec: false,
      config: '.scss-lint.yml',
      colorizeOutput: true
    },
  }
};
