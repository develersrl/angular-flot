angular.module 'angular-flot', []
    .directive 'flot', ->
        restrict: 'E'
        template: '<div></div>'
        scope:
            dataset: '='
            options: '='
        link: (scope, element, attributes) ->
            #
            # Options
            #

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

            scope.$watch 'dataset', (dataset) ->
                if plot
                    plot.setData dataset
                else
                    plot = do init

            scope.$watch 'options', ->
                plot = do init
