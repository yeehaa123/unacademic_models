(function(){

  var app = angular.module('unacademic.models.places', [
    'unacademic.models.place'
  ]);

  app.service('places', function($http, $q, Place){
    return {
      getAll: getAll
    };

    function getAll(){
      var deferred = $q.defer();
      $http.get('./api/objectives.json').success(function(data){
        var places = {};
        var keys = Object.keys(data);
        keys.forEach(function(key){
          places[key] = new Place(data[key]);
        });
        deferred.resolve(places);
      });
      return deferred.promise;
    }
  });
})();
