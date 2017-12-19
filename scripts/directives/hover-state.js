(function() {
    function hoverState() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {
                $element.on("mouseenter", function() {
                    $element.css("background-color", "darkgrey");
                });
                $element.on("mouseleave", function() {
                    $element.css("background-color", "#EEE");
                });
            }
        };
    }
    
  angular
    .module("app")
    .directive("hoverState", hoverState);
})();