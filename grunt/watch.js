module.exports = {
  default: {
  	files: 'sass/**/*.scss',
    tasks: ['sass', 'scsslint', 'autoprefixer', 'copy:duplicateStyleCSStoStartCss'],
  },
};
