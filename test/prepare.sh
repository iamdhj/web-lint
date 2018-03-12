#!/bin/sh

_project_dir_=$(cd $(dirname $(dirname $0)); pwd)
_project_modules_=$_project_dir_/node_modules/.bin

_test_dir_=$_project_dir_/test

_beautify_config_="--config $_project_dir_/config/.jsbeautifyrc"
echo $_beautify_config_
$_project_modules_/js-beautify $_beautify_config_ -f $_test_dir_/source/main.js -o $_test_dir_/result/main.js

$_project_modules_/css-beautify $_beautify_config_ -f $_test_dir_/source/main.css -o $_test_dir_/result/main.css

$_project_modules_/html-beautify $_beautify_config_ -f $_test_dir_/source/main.html -o $_test_dir_/result/main.html

