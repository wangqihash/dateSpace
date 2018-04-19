//利用class属性获取元素
function getByClass(oparent,sClass){
	var arr=[];
	var els=oparent.getElementsByTagName('*');
	var re=new RegExp('\\b'+sClass+'\\b')
	for (var i = 0; i < els.length; i++) {
		if(re.test(els[i].className)){
			arr.push(els[i])
		}
	}
	return arr
}
//js原生实现jq $
function $(item){
	var checkItems = null;
	var itemFirstSym = item.substring(0,1);
	item = item.substring(1);
	if(itemFirstSym == '#'){
		checkItems = document.getElementById(item);
	}else if(itemFirstSym == '.'){
		checkItems = document.getElementsByClassName(item);
	}
	return checkItems;
}
//js原生实现jq addClass
function addClass(elm,className1,className2,className4,className5,className6,className7,className8){
	if(arguments.length<2){ return false; }
	var tempClass = elm.getAttribute('class');
	if (tempClass==null){
		for (var i=1; i<arguments.length;i++){
			tempClass += ' '+arguments[i];
		}
	}else{
		for (var i=1; i<arguments.length;i++){
			tempClass += tempClass.match(new RegExp('(\\s|^)' + arguments[i] + '(\\s|$)')) ? '' : ' '+arguments[i];
		}
	}
	tempClass = tempClass.replace('null','');
	elm.setAttribute('class',tempClass);
}
//js原生实现jq removeClass
function removeClass(elm,className1,className2,className4,className5,className6,className7,className8){
	var tempClass = elm.getAttribute('class');
	if( arguments.length<2 || tempClass==null ){ return false; }
	for (var i=1; i<arguments.length;i++){
		tempClass = tempClass.replace(arguments[i],'');
	}
	elm.setAttribute('class',tempClass);
}
//js原生实现jq fadeIn效果
function fadeIn(elem,speed){
	var tempOpacity = 0;
	elem.style.display = "block";
	setOpacity(elem,tempOpacity);
	var timer=setInterval(function(){
		tempOpacity+=0.1;
		setOpacity(elem,tempOpacity);
		if (tempOpacity>=1){clearInterval(timer);}
	},speed/10)
}
//js原生实现jq fadeOut效果
function fadeOut(elem,speed){
	var tempOpacity = 1;
	elem.style.display = "block";
	setOpacity(elem,tempOpacity);
	var timer=setInterval(function(){
		tempOpacity-=0.1;
		setOpacity(elem,tempOpacity);
		if (tempOpacity<=0){clearInterval(timer);elem.style.display = "none";}
	},speed/10)
}
//js原生实现jq fadeTo效果
function fadeTo(elem,speed,trans){
	if(trans<0||trans>1){
		return false;
	}
	var tempOpacity=getComputedStyle(elem).opacity;
	var oNum=speed/(Math.abs(tempOpacity-trans)/0.1);
	elem.style.display = "block";
	setOpacity(elem,tempOpacity);
	var timer=setInterval(function(){
		console.log(tempOpacity,trans)
		if (tempOpacity==trans){
			clearInterval(timer);
		}else{
			trans>tempOpacity?tempOpacity+=0.1:tempOpacity-=0.1;
			tempOpacity=setFixedTo(tempOpacity,1);
			setOpacity(elem,tempOpacity);
		}
		if(tempOpacity<=0){elem.style.display = "none";}
	},oNum)
}
function setOpacity(elem, transp) {
    if(elem.style.filter) {   //IE
        elem.style.filter = 'alpha(transp:' + transp * 100 + ')';
    } else {
        elem.style.opacity = transp;
    }
}
function setFixedTo(num,precision){
	var str=String(num);
    var len=str.length;
    if (len<=precision+2){
    	return Number(str);
    }else{
    	var last=str.substring(precision+2,precision+3)
    	var lasts=str.substring(precision+3,precision+4);
    	if (Number(lasts)>5){last=Number(last)+1;}
	    str=str.substring(0,precision+2)+String(last);
	    return Number(str);
    }
}
function toDecimal2(x) { 
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(x*100)/100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}
