(function() {
  var taskForm = {
    controller: "FormController",
    templateUrl: "partials/task-form.html"
  };

  angular
    .module("app")
    .component("taskForm", taskForm);
})();


