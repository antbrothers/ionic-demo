'use strict'
var myController=angular.module('myController',[]);
myController.controller('AppCtrl',function($scope){
    $scope.More=function(){
        $(".ion-android-add-circle").addClass('more-btn');
        $(".more-btn").removeClass('rotate-more-btn');
        $(".show-back").addClass('modal-bg');
        $("#more-menu").css({'transform':'translate(0px,0px)'});
    }
    $scope.Close=function(){
        $(".more-btn").addClass('rotate-more-btn');
        $(".show-back").removeClass('modal-bg');
        $("#more-menu").css({'transform':'translate(0px,-100%)'});
    }
})
myController.controller('PlaylistsCtrl',function(){
    console.log('PlaylistsCtrl');
})
myController.controller('vidoCtrl',function(){
    console.log('vidoCtrl');
})
myController.controller('svgCtrl',function(){
    console.log('svg');
})
myController.controller('picCtrl',function(){
    console.log('picCtrl');
})
myController.controller('localCtrl',function($scope){
    console.log('local');
    $scope.localData={};
    var x=angular.element('#lng');
    $scope.getLocal=function(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                function(position){
                    $scope.localData.pos="Latitude:"+position.coords.latitude+
                        ";Longitude:"+position.coords.longitude
            });
        }else {
            $scope.localData.pos="浏览器不支持geolocation"
        }
    }
})