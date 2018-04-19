import {DataStore} from "./base/DataStore.js";

export class Director{ //导演类，控制游戏逻辑
	static getInstance(){
		if(!Director.instance){
			Director.instance = new Director();
		}
		return Director.instance;
	}
	constructor(){
		this.dataStore = DataStore.getInstance();
	}

	run(){
		debugger;
		this.dataStore.get('background').draw();
		this.dataStore.get('land').draw();
		let timer = requestAnimationFrame(()=>{
			this.run()
		});
		this.dataStore.put('timer',timer);
		//使背景能够暂停住
		// cancelAnimationFrame(this.dataStore.get('timer'))
	}
}
