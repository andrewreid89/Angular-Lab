(function() {
    function testDirective() {
        return {
            restrict: "A",
            template: `
                <p>sample stuff here</p>
        `,
            replace: true
        };

  angular
    .module("app")
    .directive("testDirective", testDirective);
})();
      
      
      
//      link: function($scope, $element, $attrs) {
//        $element.on("mouseenter", function() {
//          $element.css("background-color", "darkgrey");
//        });
//        $element.on("mouseleave", function() {
//          $element.css("background-color", "#EEE");
//        });
//      }
//    
//  }