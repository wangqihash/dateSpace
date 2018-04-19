export  class DataStore{ //变量缓存器，方便我们在不同变量中访问修改文件
	static getInstance(){
		if(!DataStore.instance){
			DataStore.instance = new DataStore();
		}
		return DataStore.instance;
	}
	constructor(){
		// 此时的 this == DataStore [其里边的值不光有本身的 还有在Main中扩展的 ctx map res一系列方法，]
		// 所以以后其他文件在 import DataStore 是也能用到这些方法 
		this.map = new Map();
		console.log(this, "DataStore+")
	}
	put(key,value){
		if(typeof value === 'function'){
			value = new value();
		}
		this.map.set(key,value);
		return this;
	}
	get(key){
		return this.map.get(key);
	}

	//销毁的值的函数
	destory(){
		for(let value of this.map.values()){
			value = null;
		}
	}
}
