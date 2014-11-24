(function(){

  var app = angular.module('unacademic.models.userplaces', [
    'unacademic.models.users',
    'unacademic.models.places'
  ]);

  app.service('userPlaces', function(users, $q, places){

    return {
      getAll: getAll,
      get: get,
    };

    function getAll(userId){
      var deferred = $q.defer();

      $q.all([users.getUser(), places.getAll()]).then(function(data){
        var userPlaces = data[0].places;
        var keys = Object.keys(userPlaces);
        var allPlaces = data[1];
        keys.forEach(function(key){
          allPlaces[key].added = true;
        });
        deferred.resolve(allPlaces);
      });


      return deferred.promise;
    }

    function get(user, placeId){
      var deferred = $q.defer();

      places.getAll().then(function(data){
        var userPlace = user.places[placeId];
        var keys = Object.keys(userPlace);
        var allPlaces = data;
        var place = allPlaces[placeId];
        keys.forEach(function(key){
          place[key] = userPlace[key];
        });
        deferred.resolve(place);
      });

      return deferred.promise;
    }
  });
})();
