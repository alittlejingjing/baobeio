function Banner(){};
        $.extend(Banner.prototype,{
            init:function(options){
                /*
                    {
                        item_list : "#show li",
                        left_btn : "#left",
                        right_btn : "#right",
                        btn_list : "#btn_list button",
                    }
                */
                //所有图片
                this.item_list=$(options.item_list)
                // //左按钮
                // this.left_btn=$(options.left_btn)
                // //右按钮
                // this.right_btn=$(options.right_btn)
                // //按钮列表
                // this.btn_list=$(options.btn_list)
                this.nowIndex=0;
                //有多少元素
                this.item_num=this.item_list.length;
                this.ul=$(".you2 ul");
                //和获取列表中第一个元素的高度值
                this.item_height=this.item_list.height();

                // if(this.left_btn.length==0 && this.right_btn==0 && this.btn_list==0){
                //     this.autoPlay();
                //     return 0;
                // }
                
                this.bindEvent();
            },
            bindEvent:function(){
                // this.left_btn.click($.proxy(this.prev,this));
                // this.right_btn.click($.proxy(this.next,this));
                // this.btn_list.mouseover($.proxy(this.toIndex ,this))

                
            },
            next:function(){
                if(this.nowIndex==this.item_num-1){
                    this.nowIndex=1;
                    this.ul.css({
                        top:0
                    })
                }else{
                    this.nowIndex++;
                }
                this.animate()
            },
            prev:function(){
                if(this.nowIndex==0){
                    this.nowIndex=this.item_num-2;
                    this.ul.css({
                        top:-(this.item_num-1)*this.item_height
                    })
                }else{
                    this.nowIndex--
                }
                this.animate()
            },
            toIndex:function(event){
                var target=event.target||event.srcElement;
               this.nowIndex=$(target).index() 
               this.animate();
            },
            animate:function(){
                //console.log(this.nowIndex)
                this.ul.stop().animate({
                    top:-this.item_height*this.nowIndex
                })
                var index=this.nowIndex==this.item_num-1 ? 0 : this.nowIndex;

                // this.btn_list.eq(index).addClass("active")
                // .siblings("button").removeClass("active")
            },
        
            autoPlay:function(){
                // if(this.btn_list.mouseover==0){
                    this.autoTimer=setInterval(function(){
                        this.next()
                    }.bind(this),3000)
            //     }else{
            //         clearInterval(this.autoTimer)
            //     }
               
            }
        })

        var banner=new Banner();
        banner.init({
            item_list : ".you2 li",
            // left_btn : "#left",
            // right_btn : "#right",
            // btn_list : "#list button",
        })
        banner.autoPlay()


        // var swiper = new Swiper('.swiper-container',{
        //     autoplay:true
        // });