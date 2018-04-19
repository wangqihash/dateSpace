import {Resources} from "./Resources.js";

export class ResourceLoader{ //资源文件加载器，确保在图片资源完成后进行渲染
	constructor(){
		this.map = new Map(Resources);
		for(let [key,value] of this.map){
			const image = new Image();
			image.src = value;
			console.log(image, "image")
			this.map.set(key,image);
		}
	}
	onLoaded(callback){
		let loadedCount = 0;
		for(let value of this.map.values()){
			// img.onload = function 指的是这个方法的使用
			value.onload = () => {
				loadedCount++;
				if(loadedCount >= this.map.size){
					callback(this.map);
				}
			}
		}
	}
	static create(){
		return new ResourceLoader();
	}
}
