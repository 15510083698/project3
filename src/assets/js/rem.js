function remStyle(){
	//获取手机宽度  375  414   768
    var w = document.documentElement.clientWidth || document.body.clientWidth
    //设置html标签的font-size
    document.documentElement.style.fontSize = w/643*100+"px";
}
remStyle();
//改变窗口大小时调用函数
window.onresize = remStyle;