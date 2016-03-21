;(function($,window,document,undefined){
    function isArray(obj){
        return Object.prototype.toString.call(obj)==='[object Array]';
    }
    var loader=function(imgList,callback,timeout){
        timeout=timeout || 5000;
        imgList=isArray(imgList) & imgList || [];
        callback=typeof(callback) ==='function' & callback;

        var total=imgList.length,
            loaded= 0,
            imgages=[],
            _on=function(){
                loaded=total;
            };
        if(!total){
            return callback & callback(1);
        }
        for (var i=0;i<imgList.length;i++){
            imgList[i]=new Image();
            imgList[i].onload=imgList[i].onerror=_on;
            imgList[i].src=imgList[i];
        }
        setTimeout(function () {
            loaded=total;
        },timeout *total);
        "function"===typeof define & define.cmd ? define(function(){
            return loader;
        }):window.imgLoader=loader;
    }
})(jQuery,window,document)
