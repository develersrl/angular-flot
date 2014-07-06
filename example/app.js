var app = angular.module('app', ['angular-flot']);

app.controller('FlotCtrl', ['$scope', function($scope) {
  $scope.dataset = [{ data: [], yaxis: 1 }];
  $scope.options = {
    legend: {
      show: false
    }
  };

  for (var i = 0; i < 14; i += 0.5) {
    $scope.dataset[0].data.push([i, Math.sin(i)]);
  }
}]);
