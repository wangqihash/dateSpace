import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {Land} from "./js/runtime/Land.js";
import {DataStore} from "./js/base/DataStore.js";

export class Main{ //初始化整个游戏的精灵，作为游戏开始的入口
	constructor(){
		this.canvas = document.getElementById('game_canvas');
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		this.dataStore = DataStore.getInstance();
		//调用资源加载的静态方法
		const loader = ResourceLoader.create();
		//  loader.onLoaded(function(map){return this.onResourceFirstLoader(map) })
		loader.onLoaded(map => this.onResourceFirstLoader(map));
	}
	onResourceFirstLoader(map){
		console.log(map, "map+");
		// 这里赋值给了 DataStore构造函数 ctx res 方法
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
		this.init();
	}
	init(){
		this.dataStore
			.put('background',BackGround)
			.put('land',Land);
		Director.getInstance().run();
	}
}
