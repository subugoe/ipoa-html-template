# ipoa-html-template

This repository holds the HTML/CSS/JS code that is used as a blueprint for the TYPO3 template.

## Useful Grunt Tasks

_every grunt task can be used with `-v` to get verbosed output_

* `grunt showTodo` lists Todo/Fix/Note comments from various files
* `grunt initialize` initialize develop/deployment by copying files from bower_components

## Linting

### Sass Linting

Within this repo it's best practice to lint Sass files. As a result you'll find `scss-lint` in the Gemfile and `.scss-lint.yml` at root.  
Please set your editor to use the custom config and lint your sass files.