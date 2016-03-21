var app=angular.module('starter',[
    'ionic',
    'myController',
    'myService'
]);

app.run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
        if(window.cordova && window.cordova.plugins.keyboard){
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar){
            StatusBar.styleDefault();
        }
    });
})
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "menu.html",
            controller: 'AppCtrl'
        })
        .state('app.playlists', {
            url: "/playlists",
            views: {
                'menuContent' :{
                    templateUrl: "../template/home.html",
                    controller: 'PlaylistsCtrl'
                }
            }
        })
        .state('app.vido',{
            url:"/vido",
            views:{
                'menuContent':{
                    templateUrl:"../template/vido.html",
                    controller:'vidoCtrl'
                }
            }
        })
        .state('app.svg',{
            url:'/svg',
            views:{
                'menuContent':{
                    templateUrl:'../template/svg.html',
                    controller:'svgCtrl'
                }
            }
        })
        .state('app.pic',{
            url:'/pic',
            views:{
                'menuContent':{
                    templateUrl:'../template/pic.html',
                    controller:'picCtrl'
                }
            }
        })
        .state('app.local',{
            url:'/local',
            views:{
                'menuContent':{
                    templateUrl:'../template/local.html',
                    controller:'localCtrl'
                }
            }
        })
    $urlRouterProvider.otherwise('/app/playlists');
})