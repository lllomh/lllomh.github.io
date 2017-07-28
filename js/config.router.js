app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',{
            url: '/home',
            views: {
          "": {
              templateUrl: 'tpl/home.html'
          }
      }
        })
        .state('photos',{
            url: '/photos',
            templateUrl: 'tpl/nav.html'
        })
        .state('about',{
            url: '/about',
            templateUrl: 'partials/about.html'
        })
})
