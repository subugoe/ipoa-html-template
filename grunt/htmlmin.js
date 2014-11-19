module.exports = {
  default: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: '../ipoa-html-template-gh-pages/',
      src: ['**/*.html'],
      dest: '../ipoa-html-template-gh-pages/',
      ext: '.html'
    }]
  }
};
