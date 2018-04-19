/**
 * @Description：采用面向对象方法编写淘宝购物车效果
 * @Author：Liao_zzzzzz
 * @Time: 2018-01-27
 */
var oContainer = document.getElementById('item-list');
var aPriceTotal = document.querySelectorAll('.price-total');
var aChooseAll = document.querySelectorAll('.choose-all');
var oAll = document.getElementById('all');
var oPromoted = document.getElementById('promoted');
var oLocked = document.getElementById('locked');
var oChooseInfo = document.querySelector('.search-info');
var oChooseSource = document.querySelector('.search-srouce');
var sortedData = [];
var interval = null;
var aItemObj = [];
var deleteDate = [];
function ShowItem(el,data,index){ //定义商品信息对象
	this.el = el;
	this.data = data;
	this.index = index;
	this.totalPrice = 0;
	this.choosedAll = false;
	this.aGroupBtn = '';
	this.aSingleBtn = '';
	this.aPromotion = '';
	this.aPrice = '';
	this.aQuantity = '';
	this.aSubtract = '';
	this.aIncrease = '';
	this.aDelete = '';
	this.curPrice = '';
	this.goodsList = '';
}
ShowItem.prototype.init = function(){//渲染方法
	var that = this;
	if (this.data.detials.length>0){
		this.el.innerHTML = this.diplay();
		this.getEle();
		this.addItemFn();
		this.adjustItemShow();
		this.data.detials.forEach(function(item,index,array){
			if (item.choose){
				that.aSingleBtn[index].checked = true;
			}
		})
		this.calcTotalPrice();
	}
}
ShowItem.prototype.getEle = function(){ //获取dom节点
	this.aGroupBtn = document.querySelector('#goods-list-'+this.index).querySelector('.choose-group');
	this.aSingleBtn = document.querySelector('#goods-list-'+this.index).querySelectorAll('.choose-single');
	this.aPromotion = document.querySelector('#goods-list-'+this.index).querySelectorAll('.promotion');
	this.aPrice = document.querySelector('#goods-list-'+this.index).querySelectorAll('.price');
	this.aQuantity = document.querySelector('#goods-list-'+this.index).querySelectorAll('.item-quantity');
	this.aSubtract = document.querySelector('#goods-list-'+this.index).querySelectorAll('.subtract');
	this.aIncrease = document.querySelector('#goods-list-'+this.index).querySelectorAll('.increase');
	this.aDelete = document.querySelector('#goods-list-'+this.index).querySelectorAll('.delete');
	this.curPrice = document.querySelector('#goods-list-'+this.index).querySelectorAll('.cur-price');
	this.goodsList = document.querySelector('#goods-list-'+this.index).querySelectorAll('.goods-info');
}
ShowItem.prototype.addItemFn = function(){ //添加操作方法
	var that = this;
	for (var i=0; i<this.aSingleBtn.length; i++){
		this.aQuantity[i].index = i;
		this.aSubtract[i].index = i;
		this.aIncrease[i].index = i;
		this.aDelete[i].index = i;
		this.aIncrease[i].onclick = function(){	//增加商品数量
			if (that.aQuantity[this.index].value>=that.data.detials[this.index].stock){return false;}
			that.aQuantity[this.index].value++;
			that.aSubtract[this.index].value = that.aQuantity[this.index].value>1 ? '-' : '';
			that.adjustCurPrice(this.index);
			that.calcTotalPrice();
		}
		this.aSubtract[i].onclick = function(){		//减少商品数量
			if (that.aQuantity[this.index].value<2){return false;}
			that.aQuantity[this.index].value--;
			that.aSubtract[this.index].value = that.aQuantity[this.index].value>1 ? '-' : '';
			that.adjustCurPrice(this.index);
			that.calcTotalPrice();
		}
		this.aQuantity[i].onblur = function(){		//手动输入商品数量
			if (that.aQuantity[this.index].value>=that.data.detials[this.index].stock){that.aQuantity[this.index].value=that.data.detials[this.index].stock;}
			if (that.aQuantity[this.index].value<1){that.aQuantity[this.index].value=1;}
			if (!Number(that.aQuantity[this.index].value)){that.aQuantity[this.index].value=1}
			that.adjustCurPrice(this.index);
			that.calcTotalPrice();
		}
		this.aSingleBtn[i].onclick = function(){	//单选按钮
			that.calcTotalPrice();
		}
	}
	this.aGroupBtn.onclick = function(){			//多选按钮
		for (var i=0; i<that.aSingleBtn.length; i++){
			that.aSingleBtn[i].checked = this.checked;
		}
		that.calcTotalPrice();
	}
}
ShowItem.prototype.adjustItemShow = function(){		//修正显示
	for (var i=0; i<this.aPromotion.length; i++){
		if (/false/.test(this.aPromotion[i].innerHTML)){
			this.aPromotion[i].style.display = 'none';
		}else{
			this.aPrice[i].style.textDecoration = 'line-through';
			this.aPrice[i].style.color = '#d3d3d3';
		}
		this.aSubtract[i].value = this.aQuantity[i].value>1 ? '-' : '';
	}
}
ShowItem.prototype.adjustCurPrice = function(index){	//调整当前总金额
	this.curPrice[index].innerHTML = toDecimal2(this.aQuantity[index].value*(this.data.detials[index].promotion?this.data.detials[index].promotion:this.data.detials[index].price))
}
ShowItem.prototype.calcTotalPrice = function(){			//计算当前商铺总金额
	var that = this;
	this.totalPrice = 0;
	var onOff = true;
	for (var i=0; i<this.aSingleBtn.length; i++){
		if (this.aSingleBtn[i].checked){
			this.totalPrice += this.aQuantity[i].value*(this.data.detials[i].promotion?this.data.detials[i].promotion:this.data.detials[i].price);
			this.goodsList[i].style.backgroundColor='#fff8e1';
			this.data.detials[i].choose = true;
		}else{
			this.data.detials[i].choose = false;
			onOff = false;
			this.goodsList[i].style.backgroundColor='';
		}
	}
	this.aGroupBtn.checked = onOff ? true : false;
	this.choosedAll = onOff ? true : false;
}
ShowItem.prototype.diplay = function(){					//Dom模板
	var elm='';
	elm = `
		<div id="${'goods-list-' + this.index}">
			<div class="merchant-info">
		 		<input type="checkbox"  name="choose-btn" class="choose-group" nodenum="${this.index}"/>
				<span>店铺：</span>
				<span>${this.data.merchants}</span>
				<img src="img/chat.jpg"/>
			</div>
			${this.detial()}
		</div>`
	return elm;
}
ShowItem.prototype.detial = function(){					//Dom模板
	var elm='';
	for(var i=0;i<this.data.detials.length;i++){
		elm+=`	<div class="goods-info mclear">
					<div class="fl">
						<input type="checkbox" name="prch-li" class="choose-single" nodenum="${this.index}" nodeindex="${i}"/>
						<img src="${this.data.detials[i].pic}"/>
					</div>
					<div class="fl">
						<a href="javascript:void(0);">${this.data.detials[i].describe}</a>
						<span>
							<img src="img/bankCard.png" />
							<img src="img/guarantee.png" />
							<img src="img/sevenDay.png"  />
						</span>
					</div>
					<div class="fl">
						<p>颜色分类：${this.data.detials[i].colorclass}</p>
						<p>尺码：${this.data.detials[i].measures}</p>
					</div>
					<div class="fl">
						<p class="price">&yen${toDecimal2(this.data.detials[i].price)}</p>
						<p class="promotion">&yen${toDecimal2(this.data.detials[i].promotion)}</p>
					</div>
					<div class="fl">
						<input type="button" name="dec" value="-" class="subtract"/><!--
			 			--><input type="input" name="quantity" value="1" class="item-quantity"/><!--
			 			--><input type="button" name="inc" value="+" class="increase"/>
			 		</div>
			 		<div class="fl">
			 			<strong>&yen<span class="cur-price">${toDecimal2(this.data.detials[i].promotion?this.data.detials[i].promotion:this.data.detials[i].price)}</span></strong>
			 		</div>
			 		<div class="fl">
			 			<p><a href="javascript:void(0);">移入收藏夹</a></p>
			 			<p><a href="javascript:void(0);" class="delete" nodenum="${this.index}" nodeindex="${i}">删除</a></p>
			 			<p><a href="javascript:void(0);">相似宝贝</a></p>
			 		</div>
			 	</div>
			`
	}
	return elm;
}
//数据筛选函数
var filterData = {
	all:function(list){
		return list;
	},
	lacked:function(list){
		return list.filter(function(item){
			return item.stock<50;
		})
	},
	descprice:function(list){
		return list.filter(function(item){
			return item.promotion;
		})
	}
}
//界面初始化
hashChangeCallBack();
window.addEventListener('hashchange',hashChangeCallBack);
//搜索框悬浮显示
oChooseInfo.onmouseover = function(){
	oChooseSource.style.display = 'block';
}
oChooseInfo.onmouseout = function(){
	oChooseSource.style.display = 'none';
}
for (var i=0; i<oChooseSource.children.length; i++){
	oChooseSource.children[i].onclick = function(){
		var tempTxt = this.innerHTML;
		this.innerHTML = oChooseInfo.children[0].innerHTML;
		oChooseInfo.children[0].innerHTML = tempTxt;
		oChooseSource.style.display = 'none';
	}
}
//删除按钮设置，事件委托方法
oContainer.onclick = function(ev){
	var e = ev||window.event
	var target = e.target || e.srcElement;
	if (target.getAttribute('class')=='delete'){
		var nodenum = target.getAttribute('nodenum');
		var nodeindex = target.getAttribute('nodeindex');
		data.forEach(function(item,index,array){
			if(item.id==sortedData[nodenum].detials[nodeindex].id){
				data.splice(index,1);
			}
		})
		sortedData[nodenum].detials.splice(nodeindex,1);
		aItemObj[nodenum].el.innerHTML = '';
		if (sortedData[nodenum].detials.length<1){
			sortedData.splice(nodenum,1);
			aItemObj.splice(nodenum,1);
			aItemObj.forEach(function(item,index,array){
				item.el.innerHTML = '';
				if (item.index>nodenum){
					item.index--;
				}
				item.init();
			})
		}
		setAmount(data);
	}
}
//绑定全选事件
for (var i=0; i<aChooseAll.length; i++){
	aChooseAll[i].onclick = function(){
		var that = this;
		aItemObj.every(function(item,index,array){
			item.aGroupBtn.checked = that.checked;
			for (var j=0; j<item.aSingleBtn.length; j++){
				item.aSingleBtn[j].checked = that.checked;
			}
			item.calcTotalPrice();
			return true;
		})
	}
}
//hash值改变，回调函数
function hashChangeCallBack(){
	var hash = window.location.hash.substring(1);
	aItemObj = [];
	document.documentElement.scrollTop = document.body.scrollTop = 0;
	oContainer.innerHTML = '';
	clearInterval(interval);
	removeClass(oAll.parentNode,'classify-notice');
	removeClass(oPromoted.parentNode,'classify-notice');
	removeClass(oLocked.parentNode,'classify-notice');
	if (hash=='descprice'){
		sortedData = mergeData(filterData.descprice(data));
		addClass(oPromoted.parentNode,'classify-notice')
	}else if(hash=='lacked'){
		sortedData = mergeData(filterData.lacked(data));
		addClass(oLocked.parentNode,'classify-notice')
	}else{
		sortedData = mergeData(filterData.all(data));
		addClass(oAll.parentNode,'classify-notice')
	}
	for (var i=0; i<sortedData.length; i++){	//渲染DOM
		var oDiv=document.createElement('div');
		oContainer.appendChild(oDiv);
		aItemObj[i] = new ShowItem(oDiv,sortedData[i],i);
		aItemObj[i].init();
	}
	fadeIn(oContainer,400);
	calcPriceToPay(aItemObj);
	setAmount(data);
	interval = setInterval(calcPriceToPay,100,aItemObj);
}
//实时更新结算总价，回调函数
function calcPriceToPay(itemList){
	var totalPrice = 0;
	var onOff = itemList.every(function(item,index,array){
		return item.choosedAll ? true : false;
	})
	itemList.forEach(function(item,index,array){
		totalPrice += item.totalPrice;
	})
	for (var i=0; i<aChooseAll.length; i++){
		aChooseAll[i].checked = onOff ? true : false;
		aPriceTotal[i].innerHTML = toDecimal2(totalPrice);
	}
}
//合并数据
function mergeData(list){
	var sortedTempData = [];
	var onOff = true;
	for (var i=0; i<list.length; i++){
		onOff = sortedTempData.some(function(value,index,array){
			if(value.merchants && value.merchants == list[i].merchants){
				sortedTempData[index].detials.push(list[i]);
				return true;
			}
		});
		if (!onOff){
			sortedTempData.push({
				merchants:list[i].merchants,
				detials:[list[i]]
			});
		}
	}
	return sortedTempData;
}
//设置导航条数量统计
function setAmount(list){
	oAll.innerHTML = filterData.all(list).length;
	oLocked.innerHTML = filterData.lacked(list).length;
	oPromoted.innerHTML = filterData.descprice(list).length;
}


(function(){
	console.log($(".nav"), "$$");
	console.log(getByClass(document, "nav"));
	fadeIn($(".nav")[0], 4000);
	console.log(toDecimal2(12.6), "toDecimal2(123)");
})();
