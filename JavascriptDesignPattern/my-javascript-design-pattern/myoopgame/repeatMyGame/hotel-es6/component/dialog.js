var Dialog = function(obj){
  if(obj.parent == undefined){
    obj.parent = document.body;
  }else{
    obj.parent = document.querySelector(obj.parent);
  }

  //创建遮罩
  if(!obj.parent.querySelector('.mast-layer')){
      var maskDom = document.createElement('div');
      maskDom.className = 'mask-layer'
      obj.parent.appendChild(maskDom);
      this.mask = maskDom;
  }else{
    this.mask = obj.parent.querySelector('.mast-layer');
  }

  //创建弹框
  if(!obj.parent.querySelector('.wrap')){
      var dom = document.createElement('div');
      dom.className = 'dialog'
      obj.parent.appendChild(obj);
      this.wrap = dom;
  }else{
    this.wrap = obj.parent.querySelector('.wrap');
  }

  this.title = obj.title || "提示信息";
  if(obj.tpl){
    this.relDirect = true;
  }
  // 弹框的全部内容 =>这里采用正则替换的方法来实现
  this.tpl = obj.tpl || '<div class="dialog-wrap"><div class="dialog-title">{{title}}</div><div class="dialog-content"><div class="dialog-info">{{information}}</div><div class="dialog-btns">{{btn}}</div></div></div>'

  //可以将弹框的 title替换了
  this.init();
};

Dialog.prototype = {
  init: function(){
    this.tpl = this.tpl.replace('{{title}}', this.title);
  },
  alert: function(msg, callback){
    if(!this.relDirect){
      this.tpl = this.tpl.replace('{{information}}', msg).replace('{{btn}}', "<span class='dialog-btn ok'>确定</span>");
    }
    this.wrap.innerHTML = this.tpl;

  }

};

export default Dialog;



/**
 *  export default 和 export 的区别？
 *
 *  export default 和 export都能导出 const function module
 *  但是一个文件中  export可以有多个 而 export default只能有一个
 *  且export 需要加{} 而 export default 不需要
 *  且 export 因为能导出多个所有import的名字和export的要一致，
 *    但是 export default相当于系统默认导出名为 default 所以一个文件只能有一个，import 是他的名字可以随意更改的
 *
 *来自 => https://blog.csdn.net/itkingone/article/details/77099112
 *
 */
