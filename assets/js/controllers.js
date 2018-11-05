'use strict';

/* Controllers */

var moduleCtrl = angular.module('gamestore.controllers', ['gamestore.services']);

moduleCtrl.controller('MainCtrl', ['$scope', '$location', 'Cart', function ($scope, $location, Cart) {
  $scope.addCart = function (game) {
    Cart.add(game);
    $location.url("/cart");
  };
}]);

moduleCtrl.controller('CatalogCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get("assets/data/catalog.json").success(function (data) {
    $scope.catalog = data;
  });
}]);

moduleCtrl.controller('CartCtrl', ['$scope', 'Cart', function ($scope, Cart) {
  $scope.cart = Cart;
}]);

moduleCtrl.controller('RaceCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get("assets/data/race.json").success(function (data) {
    $scope.race = data;
  });
}]);

moduleCtrl.controller('RpgCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get("assets/data/rpg.json").success(function (data) {
    $scope.rpg = data;
  });
}]);

moduleCtrl.controller('ActionCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get("assets/data/action.json").success(function (data) {
    $scope.action = data;
  });
}]);

moduleCtrl.controller('StratCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get("assets/data/strat.json").success(function (data) {
    $scope.strat = data;
  });
}]);
moduleCtrl.controller('CheckCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get("assets/data/catalog.json").success(function (data) {
    $scope.catalog = data;
  });
}]);
