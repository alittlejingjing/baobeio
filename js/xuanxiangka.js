var oItem1=document.getElementById("item1")
var oItem2=document.getElementById("item2")
var oItem3=document.getElementById("item3")
var oList1=document.getElementById("xuanlist-1")
var oList2=document.getElementById("xuanlist-2")
var oList3=document.getElementById("xuanlist-3")
console.log(oList1)
oList1.onclick=function(){
    oItem1.style.display="block";
    oItem2.style.display="none";
    oItem3.style.display="none";
    // oList1.style.borderBottom="none";
    // console.log(1)
}
oList2.onclick=function(){
    oItem1.style.display="none";
    oItem2.style.display="block";
    oItem3.style.display="none";
    // oList2.style.borderBottom="none";
    // console.log(2)
}
oList3.onclick=function(){
    oItem1.style.display="none";
    oItem2.style.display="none";
    oItem3.style.display="block";
    // oList3.style.borderBottom="none";
    // console.log(3)
}