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
  firaEot: {
    options: {
      patterns: [{
        match: /eot\//g,
        replacement: function () {
          return '../fonts/fira/eot/';
        }
      }]
    },
    src: ['sass/fira.scss'],
    dest: 'sass/fira.scss'
  },
  firaWoff: {
    options: {
      patterns: [{
        match: /woff\//g,
        replacement: function () {
          return '../fonts/fira/woff/';
        }
      }]
    },
    src: ['sass/fira.scss'],
    dest: 'sass/fira.scss'
  },
  firaTff: {
    options: {
      patterns: [{
        match: /ttf\//g,
        replacement: function () {
          return '../fonts/fira/ttf/';
        }
      }]
    },
    src: ['sass/fira.scss'],
    dest: 'sass/fira.scss'
  },
};
