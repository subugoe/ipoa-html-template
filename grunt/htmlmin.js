module.exports = {
  default: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      // cwd: '_site/',
      cwd: '../ipoa-html-template-gh-pages/',
      src: ['**/*.html'],
      // dest: '_site/',
      dest: '../ipoa-html-template-gh-pages/',
      ext: '.html'
    }]
  }
};
