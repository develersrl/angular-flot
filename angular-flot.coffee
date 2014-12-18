angular.module 'angular-flot', []
    .directive 'flot', ->
        restrict: 'EA'
        template: '<div></div>'
        scope:
            dataset: '='
            options: '='
            callback: '='
        link: (scope, element, attributes) ->
            #
            # Options
            #

            plot = null
            width = attributes.width || '100%'
            height = attributes.height || '100%'

            # Bug: Passing a jQuery object causes an infinite loop within Angular. Fail hard telling
            # users that they should pass us a jQuery expression as string instead.
            if scope.options?.legend?.container instanceof jQuery
                throw 'Please use a jQuery expression string with the "legend.container" option.'

            if not scope.dataset
                scope.dataset = []

            if not scope.options
                scope.options =
                    legend:
                        show: false

            #
            # Setup
            #

            plotArea = $(element.children()[0])

            plotArea.css
                width: width
                height: height

            init = ->
                plotObj = $.plot plotArea, scope.dataset, scope.options
                if scope.callback
                    scope.callback(plotObj);
                plotObj

            #
            # Watches
            #

            onDatasetChanged = (dataset) ->
                if plot
                    plot.setData dataset
                    plot.setupGrid()
                    plot.draw()
                else
                    plot = do init

            scope.$watch 'dataset', onDatasetChanged, true

            onOptionsChanged = ->
                plot = do init

            scope.$watch 'options', onOptionsChanged, true
