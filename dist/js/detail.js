//跨页面传值
function waterFall(){}
$.extend(waterFall.prototype,{
    // 初始化
    init(){
        this.page=1;
        this.main=$("#warp");
        this.loading=false;
        
        this.loadJson()
        .done(function(res){
            this.renderPage(res)
        })
        
    },
    // 加载数据
    loadJson(){
        var opt = {
            // 链接接口
            url:"http://www.wookmark.com/api/json/popular",
            // 预期服务器返回的数据类型
            dataType:"jsonp",
            // 发送到服务器的数据。将自动转换为请求字符串格式
            data:{page:this.page},
            // this => 指向实例化对象;
            //检测上下文
            context:this
        }
        return $.ajax(opt);
    },
    //渲染页面
    renderPage(json){
        var oImg = document.getElementById("smallImg");
        var oImg1 = document.getElementById("bigImg");
        // console.log(oImg)
        // var res = "";
        if(cookie("goodsId")){
            var res = cookie("goodsId")
            console.log(res,json[res]);
            oImg.src = json[res].image;
            oImg1.src = json[res].image;
        }
    }
   
})
var waterfall = new waterFall();
waterfall.init();