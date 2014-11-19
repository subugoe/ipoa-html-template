module.exports = {

  // copy HTML Inspector from bower_components to jekyll source folder
  htmlinspector: {
    src: 'bower_components/html-inspector/html-inspector.js',
    dest: 'js/vendor/html-inspector.js',
  },

  // copy picturefill to jekyll source folder
  picturefill: {
    src: 'bower_components/picturefill/dist/picturefill.min.js',
    dest: 'js/vendor/picturefill.js',
  },

  // copy jQuery to jekyll source folder
  jquery: {
    src: 'bower_components/jquery/dist/jquery.min.js',
    dest: 'js/vendor/jquery.js',
  },
  jqueryAdditionalFiles: {
    src: 'bower_components/jquery/dist/jquery.min.map',
    dest: 'js/vendor/jquery.min.map',
  },

  headroomJquery: {
    src: 'bower_components/headroom.js/dist/jQuery.headroom.min.js',
    dest: 'js/vendor/headroom.jquery.js',
  },

  headroom: {
    src: 'bower_components/headroom.js/dist/headroom.min.js',
    dest: 'js/vendor/headroom.js',
  },

  fontawesomeCss: {
    src: 'bower_components/fontawesome/css/font-awesome.css',
    dest: 'sass/fontawesome.scss',
  },

  fontawesomeFont: {
    files: [{
      expand: true,
      cwd: 'bower_components/fontawesome/fonts/',
      src: ['*'],
      dest: 'fonts/fontawesome/'
    }]
  },

  html5shiv: {
    src: 'bower_components/html5shiv/dist/html5shiv.js',
    dest: 'js/vendor/html5shiv.js',
  },

  duplicateStyleCSStoStartCss: {
    src: 'css/style.css',
    dest: 'css/start.css'
  },

  fittextJs: {
    src: 'bower_components/FitText.js/jquery.fittext.js',
    dest: 'js/vendor/fittext.js',
  },

  ghpages: {
    files: [{
      expand: true,
      cwd: '_site/',
      src: ['**'],
      dest: '../ipoa-html-template-gh-pages/'
    }],
  }

};
