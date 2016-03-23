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
myController.controller('PlaylistsCtrl',function($scope,$ionicSlideBoxDelegate,$http,$timeout){
    console.log('PlaylistsCtrl');
    $scope.index=0;
    $scope.go=function(index){
        $ionicSlideBoxDelegate.slide(index);
    }
    $scope.go_changed=function(index){
        console.log(index);
    }
    var data = [
        {
            "name": "习近平说明十三五规划背景",
            "lastname": "",
            "img": "../Images/new_one.jpg",
            "description": "向实现中华民族伟大复兴的光辉彼岸奋勇前行。"
        },
        {
            "name": "百色性侵案受害女孩缺席庭审",
            "lastname": "",
            "img": "../Images/2.jpg",
            "description": "被称为“助学达人”的王杰，十年前创办“百色助学网。"
        },
        {
            "name": "食药监公布非法疫苗案进展",
            "lastname": "",
            "img": "../Images/3.jpg",
            "description": "2016年3月22日下午，食品药品监管总局听取了涉案"
        },
        {
            "name": "iPhone SE评测：性能看齐6s",
            "lastname": "",
            "img":"../Images/4.jpg",
            "description": "苹果公司召开发布会，今年苹果公司的第一场大型的活动。"
        },
        {
            "name": "台湾游客亲历布鲁塞尔恐袭",
            "lastname": "",
            "img":"../Images/5.jpg",
            "description": "2016年3月22日下午，食品药品监管总局听取了涉案"
        },
        {
            "name": "卫计委:接种异常反应暂未增多",
            "lastname": "",
            "img": "../Images/6.jpg",
            "description": "2016年3月22日下午，食品药品监管总局听取了涉案"
        },
        {
            "name": "上海检查伪劣口罩:过滤率仅1%",
            "lastname": "",
            "img":"../Images/7.jpg",
            "description": "2016年3月22日下午，食品药品监管总局听取了涉案"
        },
        {
            "name": "深圳原副巿长陈应春坠楼身亡",
            "lastname": "",
            "img": "../Images/11.jpg",
            "description": "2016年3月22日下午，食品药品监管总局听取了涉案"
        },
        {
            "name": "每日轻松一刻：喜欢就去撩",
            "lastname": "",
            "img":"../Images/9.jpg",
            "description": "2016年3月22日下午，食品药品监管总局听取了涉案"
        },
        {
            "name": "港媒：证监会已列退市黑名单",
            "lastname": "",
            "img":"../Images/10.jpg",
            "description": "2016年3月22日下午，食品药品监管总局听取了涉案"
        }
    ];
    $scope.artists = data;
    $scope.doRefresh=function(){
        /*$http.get('http://www.runoob.com/try/demo_source/item.json')   //注意改为自己本站的地址，不然会有跨域问题
            .success(function(newItems) {
                $scope.items = newItems;
            })
            .finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });*/

        $scope.$broadcast('scroll.refreshComplete');
    }
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