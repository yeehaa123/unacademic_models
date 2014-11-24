(function() {
  class Task {
    constructor({title, description, instructions, resources, completed}){
      this.title = title;
      this.description = description;
      this.instructions = instructions;
      this.resources = resources;
      this.completed = completed || false;
    };

    toggleCompleted(){
      this.completed = !this.completed;
    }
  }

  var app = angular.module('unacademic.models.task', []);
  app.service('Task', function() {
    return Task;
  });
})();
