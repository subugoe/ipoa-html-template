module.exports = {
  start: {
    options: {
      report: 'min'
    },
    files: {
      // '_site/css/start.css': ['_site/start-1.html']
      '../ipoa-html-template-gh-pages/css/start.css': ['../ipoa-html-template-gh-pages/start-1.html']
    }
  },
  style: {
    options: {
      report: 'min'
    },
    files: {
      // '_site/css/style.css': ['_site/content-1.html']
      '../ipoa-html-template-gh-pages/css/style.css': ['../ipoa-html-template-gh-pages/content-1.html']
    }
  }
};