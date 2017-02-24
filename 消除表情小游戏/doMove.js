/**
 * Created by Administrator on 2017/1/11.
 */
var xmt = {
    doMove: function( obj , attr , endTarget , speed , time , callback ){
            var startTarget = parseInt(xmt.getStyle( obj , attr ));
            speed = startTarget>endTarget ? -speed : speed;
            time = time || 50;

            clearInterval( obj.timer );
            obj.timer = setInterval(function(){
                startTarget += speed;
                if(startTarget > endTarget && speed>0 || startTarget < endTarget && speed<0){
                    startTarget = endTarget;
                    clearInterval( obj.timer );
                    callback && callback();
                }
                obj.style[attr] = startTarget +"px";
            },time);
    },

    shake: function( obj , attr , callback ) {
        var arr = [];
        var val = parseInt(xmt.getStyle(obj, attr));
        for (var i = 20; i > 0; i = i - 2) {
            arr.push(i, -i);
        }
        arr.push(0);

        var num = 0;
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            val += parseInt(arr[num]);
            obj.style[attr] = val + "px";
            num++;
            if (num >= arr.length) {
                num = arr.length;
                clearInterval(obj.timer);
                callback && callback();
            }
        }, 50);
    },

    fadeOut: function( obj , callback ){
        var num = 1;
        clearInterval( obj.timer );
        obj.timer = setInterval(function(){
            obj.style.opacity = num;
            num-=0.1;
            if( num<=0 ){
                num = 0;
                clearInterval( obj.timer );
                callback && callback();
            }
        },50);
    },
    fadeIn: function( obj , callback ){
        var num = 0;
        clearInterval( obj.timer );
        obj.timer = setInterval(function(){
            obj.style.opacity = num;
            num+=0.1;
            if( num>=1 ){
                num = 1;
                clearInterval( obj.timer );
                callback && callback();
            }
        },50);
    },

    mix: function( obj , attr/* Array */ , endTarget/* array */ , speed/* array */ , callback ){
        var startTarget = [];
        for( var i=0; i<attr.length; i++ ){
            startTarget.push( parseInt(xmt.getStyle( obj , attr[i] )) );
            speed[i] = startTarget[i] - endTarget[i] > 0 ? -speed[i] : speed[i];
        }

        clearInterval( obj.timer );
        obj.timer = setInterval(function(){
            for( var i=0; i<attr.length; i++ ){
                startTarget[i] += speed[i];
                if( startTarget[i] <= endTarget[i] && speed[i] < 0 || startTarget[i] >= endTarget[i] && speed[i] > 0 ){
                    startTarget[i] = endTarget[i];
                    clearInterval( obj.timer );
                    callback && callback();
                }
                obj.style[attr[i]] = startTarget[i] + "px";console.log( startTarget[i] );
            }
        },50);
    },
    addClass: function( name ){
        if((typeof name).toLowerCase() == "string"){
            if(this.className ==""){
                this.className = name;
            }else{
                var array_name = this.className.split(" ");
                var array_class = name.split(" ");
                for(var i=0;i<array_class.length;i++){
                    for( var j=0;j<array_name.length;j++){
                        if(array_class[i] !== array_name[j] ){
                            this.className += " " + array_class[i];
                        }
                    }
                }
            }
        }else if((typeof name).toLowerCase() == "function"){
            name();
        }

    },
    getStyle: function( obj , attr ){
        return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    }

};
