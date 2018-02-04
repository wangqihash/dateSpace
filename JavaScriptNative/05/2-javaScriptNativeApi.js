console.log("====关于offsetTop问题====");
(function(){
	/**
	 *  Dom.offsetTop  它这里指向的是 最顶层部分，可以理解为 屏幕顶部 ，[ 其他方向同理 ]
	 * 	 
	 */
	var boxFirst = document.getElementById("box-first");
	var boxChild = document.getElementById("box-child"); 
	var boxTwoParent = document.getElementById("box-two-parent");
	
	console.log(boxFirst.offsetTop, "boxFirst.offsetTop"); // 8px
	
	console.log(boxTwoParent.offsetTop,"boxTwoParent.offsetTop"); // 108px 
	console.log(boxChild.offsetTop,"boxChild.offsetTop"); // 108px 
	
	console.log(boxFirst.offsetLeft, "boxFirst.offsetTop"); // 8px
	console.log("====")
	console.log(boxTwoParent.offsetLeft,"boxTwoParent.offsetTop"); // 108px 
	console.log(boxChild.offsetLeft,"boxChild.offsetTop"); // 108px 
	console.log((1008-806.39)/2)
	console.log((806.39-322.55)/2+109);
})();



(function(){})();
(function(){})();
(function(){})();