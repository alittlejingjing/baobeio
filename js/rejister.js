var aSpan = document.querySelectorAll("span");
        userName.onblur = function(){
            var reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
            if(reg.test(userName.value) != true){
                aSpan[0].style.color = "red";
            }else{
                aSpan[0].style.color = "green";
            }
        }
        passWord.onblur = function(){
            var reg = /[a-zA-Z\d_]{6,18}/;
            if(reg.test(passWord.value)){
                aSpan[1].style.color = "green";
            }else{
                aSpan[1].style.color = "red";
                aSpan[1].innerHTML = "6到18位数字字母下划线"
            }
        }
        passWordAgain.onblur = function(){
            if(passWordAgain.value == passWord.value){
                aSpan[2].style.color = "green";
            }else{
                aSpan[2].style.color = "red";
                aSpan[2].innerHTML = "两次密码输入不一致"
            }
        }
        email.onblur = function(){
            var reg = /^[1-9a-z][0-9a-z]{5,19}@(126|163|qq)(.com|.cn)$/;
            if(reg.test(email.value)){
                aSpan[3].style.color = "green";
            }else{
                aSpan[3].style.color = "red";
                aSpan[3].innerHTML = "邮箱格式错误"
            } 
        }
        mobile.onblur = function(){
            var reg = /^(156|158|188)[0-9]{8}$/
            if(reg.test(mobile.value)){
                aSpan[5].style.color = "green";
            }else{
                aSpan[5].style.color = "red";
                aSpan[5].innerHTML = "手机格式错误"
            }
        }