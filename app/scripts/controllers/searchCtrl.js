(function () {
  'use strict';
  var app = angular.module('yapp');
      app.controller('searchCtrl', searchCtrl);

  function searchCtrl ($scope,$http,$timeout, $q, $log) {
    $scope.getPlaces=function(){
      console.info($scope.lugar);
        var place_id = $scope.lugar.place_id;
        console.info('place_id es: '+place_id);
        $http.get('http://localhost:8089/explore_places?place_id='+place_id)
        .then(function(res){
          var obj=res.data;
          console.info(obj);
          
        },
        function error(err){
          console.info('Ocurrio un error');
        });
      
    };
  }
})();


