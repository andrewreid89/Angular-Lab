(function() {
  function FormController() {
    var vm = this;
    vm.todos = ["walk Syntax", "feed Syntax", "cook dinner", "eat dinner", "write JavaScript"];
    vm.addTask = function(newTask) {
      vm.todos.push(newTask);
      vm.newTask = "";
    };
    vm.removeTask = function(index) {
      vm.todos.splice(index, 1);
    };
  }

  angular
    .module("app")
    .controller("FormController", FormController);
})();