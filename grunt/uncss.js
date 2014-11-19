module.exports = {
  start: {
    options: {
      report: 'min'
    },
    files: {
      '../ipoa-html-template-gh-pages/css/start.css': ['../ipoa-html-template-gh-pages/start-1.html']
    }
  },
  style: {
    options: {
      report: 'min'
    },
    files: {
      '../ipoa-html-template-gh-pages/css/style.css': ['../ipoa-html-template-gh-pages/content-1.html']
    }
  }
};