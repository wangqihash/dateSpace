Vue.directive('clickoutside', {

  inserted(){
    // console.log(arguments,"inserted");
  },
  /**
   * [bind: 该方法只调用1次， 指令第一次绑定到元素是调用，在这里可以定义一个在绑定时执行一次的动作]
   * @param  {[type]} el      [它是当前指令，绑定的元素，具体到那个Dom元素]
   * @param  {[type]} binding [一个对象，他可以去到该指令在页面中绑定 的字符串形式， 和字符串形式的引用值,,等等]
   * @param  {[type]} vnode   [Vue编译的虚拟Dom]
   * @return {[type]}         [description]
   */
  bind(el, binding, vnode){
    console.log(arguments, "bindEl");
    function documentHandler(e) {
      if(el.contains(e.target)) {
        return false
      }
      if(binding.expression) {
        binding.value(e);
      }
    };
    el.__vueClickIsClose__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },

  update() {
    // console.log(arguments, "updated");
  },

  componentUpdated(el, binding) {
    // console.log(arguments, "argument");
    function escdown(e) {
      if (e.keyCode === 27) {
        binding.value(e);
      }
    };
    document.addEventListener('keydown', escdown);
  },

  unbind(el, binging) {
    document.removeEventListener('click', el.__vueClickIsClose__);
    delete el.__vueClickIsClose__;
  },

});
/**
 * 理解: bing方法中参数的意义
 *
 * 注意点：
 *  Vue指令中的 不能再用this.xx来声明变量  改用 el.xx = jj; 这么来定义了
 *
 * 指令中方法的参数都是一样
 *  bind(el(Dom元素), binding(对象), ) inserted(插入被绑定的父级调用) update componentUpdated(完成一次更新周期调用，在update之后)  unbind(解绑时)
 */
