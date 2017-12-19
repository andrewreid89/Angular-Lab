(function() {
    function buttonHover() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {
                $element.on("mouseenter", function() {
                    $element.css("opacity", "1.0");
                });
                $element.on("mouseleave", function() {
                    $element.css("opacity", "0.5");
                });
            }
        };
    }

    angular
        .module("app")
        .directive("buttonHover", buttonHover);
})();