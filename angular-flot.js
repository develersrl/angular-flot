/* global $ */
/* global angular */
/* global jQuery */

angular.module('angular-flot', []).directive('flot', function () {
  return {
    restrict: 'EA',
    template: '<div></div>',
    scope: {
      dataset: '=',
      options: '=',
      callback: '='
    },
    link: function (scope, element, attributes) {
      var plot = null
      var width = attributes.width || '100%'
      var height = attributes.height || '100%'

      // Bug: Passing a jQuery object causes an infinite loop within Angular. Fail hard telling
      // users that they should pass us a jQuery expression as string instead.
      if ((((scope.options || {}).legend || {}).container) instanceof jQuery) {
        throw new Error('Please use a jQuery expression string with the "legend.container" option.')
      }

      if (!scope.dataset) {
        scope.dataset = []
      }

      if (!scope.options) {
        scope.options = {
          legend: {
            show: false
          }
        }
      }

      var plotArea = $(element.children()[0])
      plotArea.css({
        width: width,
        height: height
      })

      var init = function () {
        var plotObj
        plotObj = $.plot(plotArea, scope.dataset, scope.options)
        if (scope.callback) {
          scope.callback(plotObj)
        }
        return plotObj
      }

      //
      // Watches
      //

      var onDatasetChanged = function (dataset) {
        if (plot) {
          plot.setData(dataset)
          plot.setupGrid()

          return plot.draw()
        } else {
          plot = init()
        }
      }

      var unwatchDataset = scope.$watch('dataset', onDatasetChanged, true)

      var onOptionsChanged = function () {
        plot = init()
      }

      var unwatchOptions = scope.$watch('options', onOptionsChanged, true)

      //
      // Tear Down
      //

      element.on('$destroy', function onDestroy () {
        unwatchDataset()
        unwatchOptions()
      })
    }
  }
})
