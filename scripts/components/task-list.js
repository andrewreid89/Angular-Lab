(function() {
    var taskList = {
        bindings: {
            todos: "<",
            todoFilter: "<"
        },
        controller: "FormController",
        templateUrl: "partials/task-list.html"
    }

    angular
        .module("app")
        .component("taskList", taskList);
})();