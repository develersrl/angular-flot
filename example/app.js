var app = angular.module('app', ['angular-flot']);

app.controller('FlotCtrl', ['$scope', function ($scope) {
    $scope.dataset = [{data: [], yaxis: 1, label: "sin"}];
    $scope.options = {
        legend: {
            container: "#legend",
            show: true
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    };

    for (var i = 0; i < 14; i += 0.5) {
        $scope.dataset[0].data.push([i, Math.sin(i)]);
    }

    $scope.onClick = function(event, pos, item){
        console.log(item.series.data[item.dataIndex]);
    }

}]);
