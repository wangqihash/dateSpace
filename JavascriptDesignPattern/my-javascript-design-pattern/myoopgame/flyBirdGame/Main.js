import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {DataStore} from "./js/base/DataStore.js";

export class Main {
  constructor() {
    this.canvas = document.getElementById("game_canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");

    this.dataStore = DataStore.getInstance();

    const loader = ResourceLoader.create();
    loader.onLonaded()

    // console.log(this, "this+");
    // 理解 => 和es5中一个道理 ,在game.js 中 new Main()这样也就调用了1次 这个类
    this.init();
  }

  onResourceFirstLoader(map) {
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
  }

  init() {
    let hash = this.dataStore.put('background', 'red').put('land', 'Land');
    console.log(hash ,"hahs");
  }
}
