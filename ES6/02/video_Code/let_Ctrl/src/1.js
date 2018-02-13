/**
 * #1
 * es6中let不存在变量声明提升,同时这样也就存在了俩个内存地址了
 */
{

  var arr = [];
  for (var i = 0; i < 10; i++) {
    let tmp = i;
    arr[i] = function () {
      // console.log(tmp, `let外部获取`);
    }
    // console.log(tmp, `let内部获取`)
  };
  arr[5]();

}

/**
 * #2
 * let 暂时性死区  ===> 本质上还就是不存在 变量声明提升 只不过这里是在 快级作用域中来讲的
 * => 只要快级作用域内存在 let命令，它声明的变量就 绑定这个区域，不再受外部影响
 *
 * ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，
 * 从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
 *  这在语法上，称为“暂时性死区
 */
{
  // var tmp = 123;

  if (true) {
    tmp = `abc`;
    // let tmp
    // console.log(tmp, "快级内部");
  }
  // console.log(tmp, `快级外部`);

}
/**
 * #3
 * let不能重复声明
 */
{
  var a = 10;
  let a = 110;
  console.log(a);

}
