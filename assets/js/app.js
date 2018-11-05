'use strict';

angular.module('gamestore', ['gamestore.controllers', 'gamestore.services', 'gamestore.filters', 'gamestore.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/catalog',   {templateUrl: 'partials/catalog.html', controller: 'CatalogCtrl'});
    $routeProvider.when('/cart',  {templateUrl: 'partials/cart.html', controller: 'CartCtrl'});
    $routeProvider.when('/race',  {templateUrl: 'partials/race.html', controller: 'RaceCtrl'});
    $routeProvider.when('/rpg',  {templateUrl: 'partials/rpg.html', controller: 'RpgCtrl'});
    $routeProvider.when('/action',  {templateUrl: 'partials/action.html', controller: 'ActionCtrl'});
    $routeProvider.when('/strat',  {templateUrl: 'partials/strat.html', controller: 'StratCtrl'});
    $routeProvider.when('/check',  {templateUrl: 'partials/checkoutform.html', controller: 'CheckCtrl'});
    $routeProvider.otherwise({redirectTo: '/catalog'});
  }]);
