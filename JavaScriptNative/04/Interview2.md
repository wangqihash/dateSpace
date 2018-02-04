#
# 1.请描述一下 cookies，sessionStorage 和 localStorage 的区别？
#   cookies在游览器和服务器间来回传递。 sessionStorage 和 localStorage不会
#   sessionStorage 和 localStorage的存储空间更大,有更丰富易用的借口
#   sessionStorage 和 localStorage存储空间各自是独立的
#   Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。
#
# 2.如何实现浏览器内多个标签页之间的通信?
#     调用localstorge、cookies等本地存储方式
#     或者通过 from 提交表单的形式 action="xx.html" 不提交到后台，直接到另外一个页面中
#
# 3.CSS居中（包括水平居中和垂直居中）
#       position使用 使用百分比效果  
#       flex => justify-conent:centet; => 水平方向上居中了
#       
# 4.如何阻止事件冒泡和默认事件
#     if (e.stopPropagation){
#        e.stopPropagation()
#      } esle { e.cancelBubble = true}
#
# 5.你有哪些性能优化的方法？
#     1.减少http请求次数: css script js, css源码压缩，图片大小控制，数据缓存
#     2.前端用变量保存Ajax请求，每次操作本地本地变量，不用请求，减少请求次数
#     3.用innerHtml代替Dom操作，减少Dom操作次数
#     4.少用全局变量，防止污染
#     5.避免页面的主体布局中使用table, table要等其中的内容完全下载完之后才会显示，
#         相对于  div+css布局慢
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
