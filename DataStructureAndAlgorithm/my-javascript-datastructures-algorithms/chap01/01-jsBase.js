/**
 *  理解这中 比较的含义是和自身相对而言，
 *  如果 '22' == true 这样会将 Number('2') == 1 这么进行比较,这是两层意思了
 */

(function() {
  console.log("33" == true);
  console.log([0] == true);
  console.log({"wq": 1} == true);
  // console.log( true == "33" );
  // console.log( true == "1" );
  //
  function testFunc(val) {
    return val
      ? console.log('true+', val)
      : console.log('false+', val);
  };

  testFunc(''); // false
  testFunc('0'); // true
  testFunc(22); // true 22
  testFunc({}); // true {}
  testFunc([]); // true []

})();


(function() {
  console.log(121113, "wq");
})();
