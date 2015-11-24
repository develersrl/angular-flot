# angular-flot

<img src="https://rawgit.com/develersrl/angular-flot/master/logo.svg" align="right" width="200" height="200"/>

[![Bower](https://img.shields.io/bower/v/angular-flot.svg?style=flat)](https://github.com/develersrl/angular-flot)
[![npm](https://img.shields.io/npm/v/angular-flot.svg?style=flat)](https://www.npmjs.com/package/angular-flot)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://choosealicense.com/licenses/mit/)

An Angular directive that wraps [Flotcharts](http://www.flotcharts.org/).


## Installation

This library is provided as a Bower component and NPM module:

- Bower: `bower install angular-flot`
- NPM: `npm install angular-flot`


## How to Use

First, make sure to add Flotchart to your project, as explained in
[Flotchart's ReadMe](https://github.com/flot/flot/blob/master/README.md) since we don't bundle
Flotcharts for you.

Add `angular-flot` to the list of dependencies in your Angular.JS application:

```javascript
angular.module('myapp', [
    'ngRoute',
    // ...
    'angular-flot'
]);
```

In your controller, create two variables to hold the dataset and Flot chart options:

```javascript
angular.module('myapp').controller('MyController', function ($scope) {
    $scope.myData = [];
    $scope.myChartOptions = {};
});
```

In your view or template, add the `flot` directive, making sure to specify both the `dataset` and
`options` attributes, pointing to the scope variables defined above:

```html
<flot dataset="myData" options="myChartOptions"></flot>
```

The Flot chart is created in a `div` element as a child of the `flot` directive. To select the DOM
element using jQuery, just do as follows (you might have to adjust the example based on the contents
of your page):

```javascript
$('flot > div');
```

## Reference

Directive attributes:

* `dataset`: Name of a variable defined in the current $scope to be used as input dataset. See
  <https://github.com/flot/flot/blob/master/API.md#data-format> for more information.
* `options`: Name of an object defined in the current scope used to configure the chart. See
  <https://github.com/flot/flot/blob/master/API.md#plot-options> for more information.
* `on-plot-click`: callback function for the 'plotclick' event,
* `on-plot-hover`: callback function for the 'plothover' event.
* `width`: Chart width, e.g.: "100%" or "350px".
* `height`: Chart height, e.g.: "100%" or "100px".
