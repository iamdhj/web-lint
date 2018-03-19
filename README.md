[![Build status][appveyor-image]][appveyor-url]

# Web-Lint-Config

## Installation

```
$ npm install web-lint-config --save-dev
```


## Copy config file to project path

```
$ ./nocd_modules/.bin/web-lint-config .
```


## Install editor plugin

|                    | [editorconfig](http://editorconfig.org/) | [js-beautify](https://github.com/beautify-web/js-beautify) | [eslint](https://eslint.org/)            | [stylelint](https://stylelint.io/)                                | [htmlhint](https://github.com/yaniswang/HTMLHint)                                 |
| ------------------ | :--------------------------------------: | :--------------------------------------: | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| WebStorm           |              native-support              |       File Watchers/External Tools       | native-support                           | native-support(2017+)                  | none                                     |
| Visual Studio Code | [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) | [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) | [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) | [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) |
| Vim                | [editorconfig-vim](https://vimawesome.com/plugin/editorconfig-vim) |                                          | [ALE](https://vimawesome.com/plugin/ale) | [ALE](https://vimawesome.com/plugin/ale) | [ALE](https://vimawesome.com/plugin/ale) |


## Config file
|   plugin          |   config              |
| ----------------- | --------------------- |
|   editorconfig    |   [.editorconfig](config/.editorconfig)       |
|   js-beautify     |   [.jsbeautifyrc](config/.jsbeautifyrc)       |
|   eslint          |   [.eslintrc](config/.eslintrc) [.eslintignore](config/.eslintignore)|
|   stylelint       |   [.stylelintrc](config/.stylelintrc)       |
|   htmlhint        |   [.htmlhintrc](config/.htmlhintrc)       |


[appveyor-image]:https://ci.appveyor.com/api/projects/status/jex7pjo0vvh9rt4f?svg=true
[appveyor-url]: https://ci.appveyor.com/project/iamdhj/web-lint-config
