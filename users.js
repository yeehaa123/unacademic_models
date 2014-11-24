(function(){

  var app = angular.module('unacademic.models.users',[
    'unacademic.models.user'
  ]);

  app.service('users', function($q, $http, User){

    return {
      getUser: getUser,
      getUsers: getUsers
    };

    function getUser(id){
      var deferred = $q.defer();
      getUsers().then(function(users){
        var user, keys, key;
        if(id){
          user = users[id];
        } else {
          keys = Object.keys(users);
          key = keys[10];
          user = users[key];
        }
        deferred.resolve(user);
      });
      return deferred.promise;
    }

    function getUsers(){
      var deferred = $q.defer();
      $http.get('api/users.json').then(function(response){
        var rawUsers = response.data;
        var keys = Object.keys(rawUsers);
        var users = {};
        var user;
        keys.forEach(function(key){
          user = new User(rawUsers[key]);
          users[key] = user;
        });
        deferred.resolve(users);
      });
      return deferred.promise;
    }
  });
})();
