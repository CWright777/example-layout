angular.module('userService', []).service('User', ['$http', function($http){
  this.create = function(newUser,callback){
    $http.post('/users', newUser).success(function(userId){
      callback(userId)
    })
  }
}])
