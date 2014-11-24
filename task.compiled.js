"use strict";
(function() {
  var Task = function Task($__1) {
    var $__2 = $__1,
        title = $__2.title,
        description = $__2.description,
        instructions = $__2.instructions,
        resources = $__2.resources,
        completed = $__2.completed;
    this.title = title;
    this.description = description;
    this.instructions = instructions;
    this.resources = resources;
    this.completed = completed || false;
  };
  ($traceurRuntime.createClass)(Task, {toggleCompleted: function() {
      this.completed = !this.completed;
    }}, {});
  var app = angular.module('unacademic.models.task', []);
  app.service('Task', function() {
    return Task;
  });
})();
