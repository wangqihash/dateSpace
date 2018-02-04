// (function() {
//
//   for (var i = 0; i < 5; i++) {
//     (function(i) {
//       console.log(i);
//       setTimeout(function(i) {
//         console.log(i); // undefined * 5
//       }, 1000);
//     })(i);
//   };
// })();
//

/**
 * setTimeout => 如果要传递参数，只能通过声明式函数，
 * 然后定时器中 setTimeout(func,arg1,arg2) => arg1,arg2都是func的参数
 */
(function() {

  for (var i = 0; i < 5; i++) {
      setTimeout(function() {
        console.log(i); // undefined * 5
      }, 1000);
  };
})();
