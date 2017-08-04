app.controller('about', function($scope) {
    $scope.app.nav.about=true
    alert(111)
});

app.controller('home',function ($scope) {
      $scope.app.nav.about=false

})
