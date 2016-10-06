var app=angular.module('yapp');

app.controller('menuCtrl', DemoCtrl);

function DemoCtrl($scope) {
  $scope.explore=false;
  $scope.plan=false;
  $scope.book=false;
  $scope.activo='';
  $scope.activar=function(param){
    if(param=='explore') {$scope.activoExp='clase'; $scope.explore=!$scope.explore;}
    
  }

}



/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/