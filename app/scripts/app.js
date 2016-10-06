'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the a
 pplication.
 */
var myApp=angular
  .module('yapp', [
    'ngCart',
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'google.places',
    'sticky',
    'duScroll'
  ]);
  myApp.config(function($interpolateProvider,$httpProvider,$stateProvider, $urlRouterProvider) {

    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
    $urlRouterProvider.when('', '/dashboard/home');
    $urlRouterProvider.when('/dashboard', '/dashboard/explore');
    
    
    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'destinoCtrl'
        })
          .state('home', {
            url: '/home',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/home.html',
            controller: 'destinoCtrl'
          })
          .state('explore', {
            url: '/explore',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/explore.html',
            controller:'exploreCtrl'
          })
          .state('overview', {
            url: '/overview',
            parent: 'explore',
            templateUrl: 'views/dashboard/sections/overview.html',
            controller:'menuCtrl'
          })
          .state('destinations', {
            url: '/destinations',
            parent: 'explore',
            templateUrl: 'views/dashboard/sections/destinations.html',
            controller:'menuCtrl'
          })
          .state('climate', {
            url: '/climate',
            parent: 'explore',
            templateUrl: 'views/dashboard/sections/climate.html',
            controller:'menuCtrl'
          })
          .state('things_to_do', {
            url: '/things_to_do',
            parent: 'explore',
            templateUrl: 'views/dashboard/sections/things_to_do.html',
            controller:'menuCtrl'
          })
          .state('places_to_go', {
            url: '/places_to_go',
            parent: 'explore',
            templateUrl: 'views/dashboard/sections/places_to_go.html',
            controller:'menuCtrl'
          })
          .state('places_to_stay', {
            url: '/places_to_stay',
            parent: 'explore',
            templateUrl: 'views/dashboard/sections/places_to_stay.html',
            controller:'menuCtrl'
          });

  });
