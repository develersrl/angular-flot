# Change Log

All notable changes to this project are documented in this file.

## 0.0.17 - 2017-04-19

### Added

* Minified version of `angular-flot.js`.


## 0.0.16 - 2016-01-10

* No functional changes. Bumped copyright year and added license header to angular-flot.js.


## 0.0.15 - 2015-11-24

* Use `$timeout` instead of `scope.$apply` in event handlers. See also issue #30.


## 0.0.13 - 2015-09-17

* Properly destroy the plot when the directive is being destroyed. Contributed by @Botffy.


## 0.0.11 - 2015-09-12

* Watch width and height attributes. Contributed by @gudubeth.


## 0.0.10 - 2015-07-23

* Prevent double initialization when both a dataset and plot options are given. Thanks to @liuce for
  the patch.


## 0.0.9 - 2015-06-30

* Switch to semistandard-format (that performs semicolon insertion) to reformat source code since
  the lack of semicolon broke some builds.


## 0.0.8 - 2015-06-29

* Added pie chart example.
* Added categories chart example.
* Removed development dependency on CoffeeScript. Use plain old ES5.
* Forward "plotclick" and "plothover" events to controller (thanks to Itsiki Avidan) [#21, #22].


## 0.0.6 - 2014-09-18

### Changed

* __BREAKING CHANGE__: Initial watch is done with scope.$watch instead of scope.$watchCollection.
