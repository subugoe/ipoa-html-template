module.exports = {
  default: {
    options: {
        removeComments: true,
        collapseWhitespace: true
    },
    files: [{
        expand: true,
        cwd: '_site/',
        src: ['**/*.html'],
        dest: '_site/',
        ext: '.html'
    }]
  }
};
