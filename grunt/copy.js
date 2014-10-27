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

  // copy Fira font from bower_components to jekyll source folder
  fira: {
    files: [{
      expand: true,
      cwd: 'bower_components/fira/',
      src: ['eot/*', 'otf/*', 'ttf/*', 'woff/*'],
      dest: 'fonts/fira/'
    }]
  },

  firaCss: {
    src: 'bower_components/fira/fira.css',
    dest: 'sass/fira.scss',
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
      dest: 'fonts/'
    }]
  },

};
