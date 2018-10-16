var oItem1=document.getElementById("item1")
var oItem2=document.getElementById("item2")
var oItem3=document.getElementById("item3")
var oList1=document.getElementById("xuanlist-1")
var oList2=document.getElementById("xuanlist-2")
var oList3=document.getElementById("xuanlist-3")
//console.log(oList1)
oList1.onclick=function(){
    oItem1.style.display="block";
    oItem2.style.display="none";
    oItem3.style.display="none";
    oList1.style.borderBottomColor="#fff";
    oList2.style.borderBottomColor="#ddd";
    oList3.style.borderBottomColor="#ddd";
    console.log(1)
}
oList2.onclick=function(){
    console.log(2)

    oItem1.style.display="none";
    oItem2.style.display="block";
    oItem3.style.display="none";
    oList2.style.borderBottomColor="#fff";
    oList1.style.borderBottomColor="#ddd";
    oList3.style.borderBottomColor="#ddd";
}
oList3.onclick=function(){
    oItem1.style.display="none";
    oItem2.style.display="none";
    oItem3.style.display="block";
    oList3.style.borderBottomColor="#fff";
    oList1.style.borderBottomColor="#ddd";
    oList2.style.borderBottomColor="#ddd";
    // console.log(3)
}