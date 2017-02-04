angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when('/fizzbuzz', {
    templateUrl: 'partials/fizzbuzz.html',
    controller: 'fizzbuzzCtrl'
  })
  .when('/fozzbazz', {
    templateUrl: 'partials/fozzbazz.html',
    controller: 'fozzbazzCtrl'
  })
  .otherwise({
    redirectTo: '/fizzbuzz'
  });
})
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
are named what $routeProvider and the partials are expecting  */

.factory('counter', function(){
  var cnt = 0 ;
  var fizz = function(cnt){
    if(cnt%3 === 0 && cnt%5===0){
      return "fizzBuzz"
    }else if(cnt%3 === 0){
      return 'fizz'
    }else if(cnt%5 === 0){
      return 'Buzz'
    }else {
      return cnt ;
    }
  };

  var fozz = function(cnt){
   if(cnt%4 === 0 && cnt%6===0){
    return "fozzBazz"
  }else if(cnt%4 === 0){
    return 'fozz'
  }else if(cnt%6 === 0){
    return 'Bazz'
  }else {
    return cnt ;
  }

}
return {
  cnt:cnt,
 fizz:fizz,
 fozz:fozz 
}
})
.controller('fizzbuzzCtrl', function($scope , counter){
    $scope.display = 'start clicking';
    $scope.increment = function(){
        counter.cnt ++ 
        $scope.display = counter.fizz(counter.cnt)
    } 
})
.controller('fozzbazzCtrl', function($scope , counter){
   $scope.display = 'start clicking';
   $scope.increment = function(){
       counter.cnt ++ 
      $scope.display = counter.fozz( counter.cnt ++ )
  } 
});
