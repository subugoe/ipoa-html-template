module.exports = {
  start: {
    options: {
      report: 'min'
    },
    files: {
      '_site/css/start.css': ['_site/start-1.html']
    }
  },
  style: {
    options: {
      report: 'min'
    },
    files: {
      '_site/css/style.css': ['_site/content-1.html']
    }
  }
};