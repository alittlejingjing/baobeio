function ShopCar(){

}
$.extend(ShopCar.prototype,{
    init:function(){
        this.bindEvent();
        
    },
    //绑定事件
    bindEvent:function(){
        $("#warp").on("click",".shen",this.addCar.bind(this));
        $(".shopCar>div").on("mouseenter",this.showList.bind(this));
        $(".shopCar>div").on("mouseleave",function(){
            $(".goods-list").children().remove();
        });
        $(".shopCar>div").on("click",function(event){
            var target = event.target ; 
            if(target != $(".shopCar>div")[0]) return 0;

            $.removeCookie("shopCar");
            // 执行鼠标移出事件;
            $(".shopCar>div").triggerHandler("mouseleave");
            this.listSum();
        }.bind(this));
       
    },
    addCar:function(event){
        // console.log(1)
        //我怎么知道谁加入到了购物车；
        var target = event.target ;
        var goodsId = $(target).attr("data-id");
        // console.log(goodsId);
        // 如何把id加入cookie;
        //$.cookie("shopCar",goodsId);

        // cookie 是纯文本;          JSON.parse()  string => array;
        // 加入购物车需要 array 数组; JSON.stringify()  array  => string;
        
        // $.cookie("shopCar",`[${goodsId}]`);
        // console.log($.cookie("shopCar"));
        // 分成两种情况;
        // 1. cookie之中没有 shopCar cookie 或者 shopCarcookie里面的值为空数组;

        // 建立数组结构;

        // 2. cookie 之中有了shopCar cookie shopCarCookie里面的数组不为空;

        // 把cookie转换成数组 进行push操作 ;  转换成字符串 放入cookie之中;
        var cookie;
        if((cookie = $.cookie("shopCar"))){
            // 将字符串转换为数组, 方便插入操作;
            // console.log(cookie);
            var cookieArray = JSON.parse(cookie);
            // 判定当前要添加的商品 是否已经存在在购物车里;
            // 表示是否存在商品;
            var hasGoods = false;
            for(var i = 0 ; i < cookieArray.length ; i ++){
                if(cookieArray[i].id == goodsId ) {
                    // 存在 商品;
                    hasGoods = true;
                    cookieArray[i].num ++;
                    break;
                }
            }
            // 如果没有商品;
            if(hasGoods == false){
                var goods = {
                    id : goodsId,
                    num : "1"
                }
                cookieArray.push(goods);
            }

            // 将数组 转为字符串 方便 储存cookie;

            //console.log(JSON.stringify(cookieArray));
            $.cookie("shopCar",JSON.stringify(cookieArray));
        }else{
            $.cookie("shopCar",`[{"id":"${goodsId}","num":"1"}]`);
        }
        console.log($.cookie("shopCar"));
        this.listSum();
    },
    showList:function(event){
        // 判定是否存在购物车,如果不存在购物车就没必要拼接列表了;
        // var target = event.target;

        // if(target != $(".shopCar>div")[0]) return 0;

        var cookie;
        if(!(cookie = $.cookie("shopCar"))){ return 0; };
        var cookieArray = JSON.parse(cookie);

        var html = "";
        // for 购物车里有多少商品就拼接多少个;
        for(var i = 0 ; i < cookieArray.length ; i ++){
            //console.log(cookieArray[i]);
            // for 判断哪一个商品是购物车里的商品;
            for(var j = 0 ; j < this.json.length ; j ++){
                if(cookieArray[i].id == this.json[j].id){
                    html += `<li data-id="${cookieArray[i].id}">
                                <img src="${this.json[j].image}" alt="">
                                <h3>喜欢的</h3>
                                <strong>${cookieArray[i].num}</strong>
                            </li>`;
                    break;
                }
            }
        }
        
        $(".goods-list").html(html);
    },
    listSum:function(){
        var cookie;
        if(!(cookie = $.cookie("shopCar"))){ 
            $(".shopCar").find("span").html(0);
            return 0;
        };
        var cookieArray = JSON.parse(cookie);
        var sum = 0;
        for(var i = 0 ; i < cookieArray.length ; i ++){
            sum += Number(cookieArray[i].num);
        }
        $(".shopCar").find("span").html(sum);
    }

})

var car = new ShopCar();
car.init();