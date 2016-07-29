angular
.module('simpleApp', ['ui.router'])
.config(function($stateProvider) {
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: "mainCtrl",
      controllerAs: "main"
    })
    .state('tasks', {
      url: "/tasks",
      templateUrl: "views/tasks.html",
      controller: "tasksCtrl",
      controllerAs: "tasks"
    })
});