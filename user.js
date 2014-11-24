(function(){

  app = angular.module('unacademic.models.user', [
    'unacademic.models.places'
  ]);

  app.service('User', function($q, places){

    function User(user){
      this.profile = user.profile;
      this.profile.name.full = this.profile.name.first + " " + this.profile.name.last;
      this.places = user.places;
    }

    User.prototype.markPlaceCompleted = function(id){
      this.places[id].completed = new Date();
    };

    User.prototype.addPlace = function(id){
      var deferred = $q.defer();
      var self = this;
      places.getAll().then(function(allPlaces){
        var place = allPlaces[id];
        place.started = new Date();
        place.completed = false;
        self.places[id] = place;
        deferred.resolve(place);
      });
      return deferred.promise;
    };

    User.prototype.removePlace = function(id){
      delete this.places[id];
    };

    return User;
  });
})();
