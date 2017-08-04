app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',{
            url: '/home',
            views: {
          "": {
              templateUrl: 'tpl/home.html',
              controller:'home'
          }
      }
        })
        .state('photos',{
            url: '/photos',
            templateUrl: 'tpl/nav.html'
        })
        .state('about',{
            url: '/about',
            templateUrl: 'tpl/about.html',
            controller:'about'

        })
})
