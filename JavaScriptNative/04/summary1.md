#  React总结:
#     react 生命周期函数理解
#        => React组件的生命周期 从广义上大概可以为，挂载，渲染，卸载，
#        => 当组件渲染后的组件组件需要更新时，组件有会经历挂载直至卸载
#        => 所以可以分为两大类： 组件的挂载和卸载，组件的更新
#        =>
#        =>###组件创建过程
#        =>        es6              和          es5     创建组件区别
#        => static propTypes               propTypes       
#        => static defaultProps            getDefaultProps
#        => constructor{this.state}        getInitState
#        =>     componentWillMount  组件挂载，这里生命周期执行1次，可以修改setState(无意义)
#        =>       render
#        =>     comoponentDidMount   组件渲染后调用
#        =>     props[父]                       state [自身]
#        =>   componentWillReceiveProps    shouldComponentUpdate
#        =>                                true     false -> componentDidUpdate不执行周期
#        =>                                componentDidUpdate         
#        =>                                   render
#        =>                                 comoponentDidMount
#        
######   =>纯函数(无状态函数式)创建组件    和  es5 和 es6  创建组件的区别
#
#        => function func() { return <div/> }
#        => ReactDom.render(<div/>, root);
#        =>     
#        => 纯函数：
#        =>     它只接受props来跟新组件，他是无状态的，只有一个render方法，增强了编写组件的便利
#        =>     特点：
#        =>         纯函数组件 不会被实例化，渲染性能得到提升，
#        =>         因为是 render出来的所以它存在实例过程，也就没有了this,
#        =>         constructor 生命周期函数，要跟新只能通过props改变
#        =>         es5，es6中每调用一次组件，就会创建一次该组件实例
#        =>es5 和 es6
#        => es5定义 porpTypes:{ initialValue: React.PropTypes.string}这么直接定义
#        =>        defaultProps:{}
#        =>        getInitialState: function
#        => es6定义 static  PropTypes = {}   //定义
#        =>         static  defaultProps = {} // 类的静态属性
#        =>         constructor(){this.state}
#        => 还有初始化 state 他们也有区别
#        => 对于this 绑定es5中函数的this都有react自动绑定，直接用 this.func
#     
#######  => this中需要手动绑定 (3中绑定方式)
#
#        => es5语法  直接在标签中 this.func.bind(this, arg); 这中能够携带参数
#        => es6语法 直接在 constructor 中绑定  
#        => es6的箭头函数用法 ： <button onClick=()=>{}></button>  
#        => 或者 handleClick(){} <button onClick={ this.handleClick }></button>            
#        =>
#        =>
#        
######   react state 和 props 关系 以及 react是怎么通信的
#        ->  state 用于自身的状态改变， props用于父子之间的同通信，
#        ->  还有个全局的通信 context相当于js中的全局变量
#        ->
#        ->
#
######   react 单项数据流和Angular双向数据绑定的理解
#        =>  react 数据是自顶而下单向流动的，父 -> 子 这让组件之间关系变得可预测
#        =>  通过redux 中的 dispatch(action) -> reducer() => newState 来体现单项数据流
#        =>  
#        =>  Angular 推崇的是双向数据绑定，通过 数据的改变从而来改变视图层，反之也一样
#       

#        =>     而react中它也可以是实现输入框例子，不过它只是通过单个数据的引用而已 所以也就没有双向的效果
#        =>     并非是有 ng-model 这种 来绑定数据，
#        =>     
#        =>     
#        =>     
#        =>     
#        =>     https://segmentfault.com/q/1010000005876655/a-1020000005876751
#
######   react-redux的理解
#        ->
#        ->
#        ->
#        ->
#        ->
#        ->
######   解释react-redux的过程
#
#
# Angular总结:
#     Angular 双向数据绑定的理解
#     Angular之间的通信关系
#
#
#
# OOP总结:
#    原型，继承，多态
#     重点理解原图图，原型链的关系
#
#
#
# 面试题总结:
#
#
#
#
#
#
#
#
