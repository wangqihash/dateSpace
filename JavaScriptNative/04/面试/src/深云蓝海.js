(function(){
	console.log(typeof('string'), 'string');
	console.log(typeof(123), 'number');
	console.log(typeof([]), 'Array');
	console.log(typeof(new Object()), 'Array');    	// object
	console.log(typeof( function () {}), 'Array');  // function  这里检查类型除外
	console.log(typeof( new Date() ), 'Array');

})();



(function(){})();

(function(){})();
(function(){})();