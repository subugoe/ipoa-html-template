module.exports = {
  default: {
  	files: 'sass/**/*.scss',
    tasks: ['sass', 'autoprefixer', 'copy:duplicateStyleCSStoStartCss'],
  },
};
