(function() {
    function deleteHover() {
        return {
            restrict: "A",
            link: function($scope, $element, $attrs) {
                $element.on("mouseenter", function() {
                    $element.css("color", "#FF0000");
                });
                $element.on("mouseleave", function() {
                    $element.css("color", "black");
                });
            }
        };
    }

    angular
        .module("app")
        .directive("deleteHover", deleteHover);
})();