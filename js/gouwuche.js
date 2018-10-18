function ShopCar(){

}
$.extend(ShopCar.prototype,{
    init:function(){
        this.main = $(".warp .warp1")
        // this.loadJson()
        .then(function(res){
            // console.log(res);
            this.json = res.subjects;
            // this.renderPage()
        })
        this.bindEvent();
        this.listSum();
    },
    // loadJson:function(){
    //     var opt = {
    //         url:"http://localhost:8888/proxy/api.douban.com/v2/movie/top250",
    //         data:{start:0,count:10},
    //         type:"GET",
    //         context : this
    //     }
    //     return $.ajax(opt);
    // },
    // renderPage:function(){
    //    console.log(this.json)
    //     var html = "";
    //     for(var i = 0 ; i < this.json.length ; i ++){
    //         html += `<li>
    //                     <img src="${this.json[i].images.small.replace(/\.jpg/g,".webp")}" alt="">
    //                     <h3>${this.json[i].title}</h3>
    //                     <button data-id=${this.json[i].id}>加入购物车</button>
    //                 </li>`
    //     }
    //     this.main.html(html);
    // },
    bindEvent:function(){
        $(".warp .warp1").on("click","button",this.addCar.bind(this));

        $(".shopCar>div").on("mouseenter",this.showList.bind(this));
        $(".shopCar>div").on("mouseleave",function(){
            $(".warp1").children().remove();
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
        // 我怎么知道把谁加入到购物车之中那?;
        var target = event.target ;
        var goodsId = $(target).attr("data-id");
        // console.log(goodsId);
        // 如何把id加入cookie;
        // $.cookie("shopCar",goodsId);

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

            // console.log(JSON.stringify(cookieArray));
            $.cookie("shopCar",JSON.stringify(cookieArray));
        }else{
            $.cookie("shopCar",`[{"id":"${goodsId}","num":"1"}]`);
        }
        console.log($.cookie("shopCar"));
        this.listSum();
    }
    ,
    showList:function(event){
        // 判定是否存在购物车,如果不存在购物车就没必要拼接列表了;
        var target = event.target;

        if(target != $(".shopCar>div")[0]) return 0;

        var cookie;
        if(!(cookie = $.cookie("shopCar"))){ return 0; };
        var cookieArray = JSON.parse(cookie);

        var html = "";
        // for 购物车里有多少商品就拼接多少个;
        for(var i = 0 ; i < cookieArray.length ; i ++){
            // console.log(cookieArray[i]);
            // for 判断哪一个商品是购物车里的商品;
            for(var j = 0 ; j < this.json.length ; j ++){
                if(cookieArray[i].id == this.json[j].id){
                    html += `<div class="warp1 clearfix">
                                <a href="http://localhost:8888/detail.html"><img class="pacture" src="${json[i].image}" alt=""></a>
                                <p class="free">【免费】修身莫代尔打底衫+4</p>
                                <p class="fen">份数：<b>8</b></p>
                                <p class="see">已关注：<b>344</b>次</p>
                                <p class="email">邮费：<strong>免邮</strong></p>
                                <img class="vip" src="images/zzVip.gif" alt="">
                                <div class="shen">免费申请</div>
                            </div>`;
                    break;
                }
            }
        }
        
        $(".warp").html(html);
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