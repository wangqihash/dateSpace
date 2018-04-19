import {Resources} from "./Resources.js";

export class ResourceLoader {
  constructor() {
    this.map = new Map(Resources);
    for (let [key, value] of this.map) {
      const image = new Image();
      image.src = value;
      this.map.set(key, value);
    }
  }

  onLonaded(callback) {
    let loadedCount = 0;
    for (let value of this.map.values()) {
      console.log(value, "ResourceLoader+")
      value.onload = () => {
        loadedCount++;
        if (loadedCount >= this.map.size) {
          // callback(this.map);
        }
      }
    }
  }

  static create() {
    return new ResourceLoader();
  }

}
