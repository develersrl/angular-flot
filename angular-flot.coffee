angular.module 'angular-flot', []
    .directive 'flot', ->
        restrict: 'EA'
        template: '<div></div>'
        scope:
            dataset: '='
            options: '='
        link: (scope, element, attributes) ->
            #
            # Options
            #
            plot = null
            width = attributes.width || '100%'
            height = attributes.height || '100%'

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
                $.plot plotArea, scope.dataset, scope.options

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
