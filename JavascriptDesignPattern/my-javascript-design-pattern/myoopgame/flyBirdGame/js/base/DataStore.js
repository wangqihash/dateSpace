export class DataStore {
  static getInstance() {
    if (!DataStore.instance) {
      //本质上就是把 DataStore类暴露出去
      DataStore.instance = new DataStore
    }
    return DataStore.instance
  }

  constructor() {
    this.map = new Map();
    console.log(this, "DataStore => this")
  }

  put(key, value) {
    if (typeof value === 'function') {
      value = new value();
    }
    this.map.set(key, value);
    return this;
  }

  get(key){
    return this.map.get(key);
  }

}
