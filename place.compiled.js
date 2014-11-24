"use strict";
(function() {
  var app = angular.module('unacademic.models.place', ['unacademic.models.task']);
  app.service('Place', function(Task) {
    var Place = function Place($__1) {
      var $__2 = $__1,
          title = $__2.title,
          level = $__2.level,
          category = $__2.category,
          points = $__2.points,
          description = $__2.description,
          tasks = $__2.tasks,
          resources = $__2.resources;
      this.title = title;
      this.level = level;
      this.points = points || 0;
      this.tasks = this.generateTasks(tasks);
      this.description = description || "";
      this.baseUrl = this.generateBaseUrl(this.title);
      this.url = this.generateUrl(this.baseUrl);
      this.categories = {
        "design": "assertive",
        "markup": "positive",
        "data": "balanced",
        "workflow": "energized",
        "general": "calm"
      };
      this.category = this.checkCategory(category);
      this.color = ("" + this.categories[$traceurRuntime.toProperty(this.category)]);
    };
    ($traceurRuntime.createClass)(Place, {
      generateTasks: function(rawTasks) {
        var tasks = rawTasks || [];
        return tasks.map(function(task) {
          return new Task(task);
        });
      },
      get completion() {
        var tasksLength = this.tasks.length;
        var completed = 0;
        this.tasks.forEach(function(task) {
          if (task.completed) {
            completed += 1;
          }
        });
        return (100 / tasksLength) * completed;
      },
      get id() {
        var level = this.generateLevel(this.level);
        var title = this.generateTitle(this.title);
        return (level + "_" + title);
      },
      checkCategory: function(category) {
        var allowedCategories = Object.keys(this.categories);
        return allowedCategories.find((function(c) {
          return c === category;
        }));
      },
      generateUrl: function(url) {
        return (url + "/logo.svg");
      },
      generateBaseUrl: function(rawTitle) {
        var title = this.generateTitle(rawTitle).toLowerCase();
        return ("img/objectives/" + title);
      },
      generateTitle: function(title) {
        return title.split(" ").join("_");
      },
      generateLevel: function(level) {
        if (level < 10) {
          return ("00" + level);
        } else if (level < 100) {
          return ("0" + level);
        } else {
          return this.level;
        }
      }
    }, {});
    return Place;
  });
})();
