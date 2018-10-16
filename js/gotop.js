var oTop = document.getElementById("gotop")
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if(scrollTop >= 500){
			oTop.style.display = "block"
			}
		if(scrollTop < 500){
			oTop.style.display = "none"
		}
	}
	oTop.onclick = function(){
		if(document.body.scrollTop){
			document.body.scrollTop = 0
		}else{
			document.documentElement.scrollTop = 0
		}
		scrollTop = 0
	}
