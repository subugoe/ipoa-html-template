# ipoa-html-template

This repository holds the HTML/CSS/JS code that is used as a blueprint for the TYPO3 template.

## Useful Grunt Tasks

_every grunt task can be used with `-v` to get verbosed output_

* `grunt showTodo` lists Todo/Fix/Note comments from various files
* `grunt initialize` initialize development/deployment by copying files from bower_components and replacing css path definitions in scss files 
* `grunt refresh` cleans (as in: existing files) the jekyll and sass output (`_site/` and `css/`) and runs the SASS-to-CSS compliation once. Use this before running `foreman start` to get a fresh start

## Linting

### Sass Linting

Within this repo it's best practice to lint Sass files. As a result you'll find `scss-lint` in the Gemfile and `.scss-lint.yml` at root.  
Please set your editor to use the custom config and lint your sass files.

## Guidelines and hints

### Sass Formatting

If (as in: you should stick to it) possible follow the excellent [CSS Guidelines](http://cssguidelin.es) by [@csswizardry](https://twitter.com/csswizardry).

### JavaScript Support and fallback

By default the page HTML tag has the CSS class value "no-js". Via a one-line-js in the HEAD it gets replaced by "js", but only if the client supports JavaScript. This allows for writing CSS rules as fallback.

## Misc

* [Avoiding common HTML5 mistakes](http://html5doctor.com/avoiding-common-html5-mistakes/)
* [Avoiding the FOUC v3.0](http://www.paulirish.com/2009/avoiding-the-fouc-v3/)