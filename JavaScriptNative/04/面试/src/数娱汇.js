(function() {
	var name = "The Window";
	var object = {　　　　
		name: "My Object",
		getNameFunc: function() {　　　
			//console.log(this, "getNameFunc this");　　 //　object
			return function() {　　　　　　
				//console.log(this, "return this");　　　 // window
				return this.name;　　　　　
			};　　　　
		}
	};

	console.log(object.getNameFunc());
	// console.log(object.getNameFunc()());


})();


(function() {

	function func() {
		console.log(this, 'func this');  // 这个函数没人调用，所以这里的是 window
	};
	func();

})();


(function() {})();
(function() {})();
