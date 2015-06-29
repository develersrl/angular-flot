/* global angular */

var app = angular.module('app', ['angular-flot'])

app.controller('FlotCtrl', ['$scope', function ($scope) {
  //
  // Standard Chart Example
  //

  $scope.dataset = [{ data: [], yaxis: 1, label: 'sin' }]
  $scope.options = {
    legend: {
      container: '#legend',
      show: true
    }
  }

  for (var i = 0; i < 14; i += 0.5) {
    $scope.dataset[0].data.push([i, Math.sin(i)])
  }

  //
  // Pie Chart Example
  //

  $scope.pieDataset = []
  $scope.pieOptions = {
    series: {
      pie: {
        show: true
      }
    }
  }

  var pieSeries = Math.floor(Math.random() * 6) + 3

  for (i = 0; i < pieSeries; i++) {
    $scope.pieDataset[i] = {
      label: 'Series' + (i + 1),
      data: Math.floor(Math.random() * 100) + 1
    }
  }
}])
