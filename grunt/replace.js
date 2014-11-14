module.exports = {
  fontawesomePath: {
    options: {
      patterns: [{
        match: /fonts\/fontawesome/g,
        replacement: function () {
          return 'fonts/fontawesome/fontawesome';
        }
      }]
    },
    src: ['sass/fontawesome.scss'],
    dest: 'sass/fontawesome.scss'
  },
};
