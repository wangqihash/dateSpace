console.log("==========迭代二维数组=========");
(function() {
  var twoDimensionalArr = [];
  twoDimensionalArr[0] = [11, 22, 33, 44];
  twoDimensionalArr[1] = [55, 66, 77, 88];

  function printTwoArr(arr) {
    var newArr = [];
    for (var r = 0; r < arr.length; r++) {
      for (var c = 0; c < arr[r].length; c++) {
        // console.log(arr[r][c]);
        newArr.push(arr[r][c])
      }
    }
    return newArr
  }
  console.log(printTwoArr(twoDimensionalArr), "迭代二维数组");
})();

(function(){
  var matrix3x3x3 = [];
  for (var i=0; i<3; i++){
      matrix3x3x3[i] = [];
      for (var j=0; j<3; j++){
          matrix3x3x3[i][j] = [];
          for (var z=0; z<3; z++){
              matrix3x3x3[i][j][z] = i+j+z;
          }
      }
  };
  console.log(matrix3x3x3, "matrix3x3x3")
})();
