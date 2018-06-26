var isValueNumber = function(value) {
  return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
};

var inputNumber = {
  template: `<div class="input-number">
                <input type="text" :value="currentValue" @change="handleChange"/>
                <button @click="handleDown()" :disabled="currentValue <= min"> - </button>
                <button @click="handleUp()" :disabled="currentValue >= max"> + </button>
              </div>`,

  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {currentValue: this.value}
  },
  /**
   * [watch description]
   * 用来监听某个 pros 或 data 的改变,当他们发生变化时，就会触发watch配置的函数
   */
  watch: {
    /**
     * [currentValue description]
     * @param  {agr1}  newValue
     * @return {arg2}  oldValue
     */
    currentValue(val) {
      console.log(val, "currentValue");
      this.$emit("input", val);
      this.$emit("on-change", val);
    },
    value(val) {
      console.log(val, "value");
      this.updateValue(val);
    }
  },
  methods: {
    handleDown() {
      if (this.currentValue <= this.min) {
        return
      };
      this.currentValue -= 1;
    },
    handleUp() {
      if (this.currentValue >= this.max) {
        return
      };
      this.currentValue += 1;
    },
    updateValue(val) {
      if (val > this.max) {
        val = this.max;
      }
      if (val < this.min) {
        val = this.min;
      }
      this.currentValue = val;
    },
    handleChange(event) {
      var val = event.target.value.trim();
      // console.log(val, "handleChange");
      var max = this.max;
      var min = this.min;
      if (isValueNumber(val)) {
        val = Number(val);
        this.currentValue = val;
        if (val > max) {
          this.currentValue = max;
        } else if (val < min) {
          this.currentValue = min;
        }
      } else {
        event.target.value = this.currentValue;
      };
    },

    mounted() {
      this.updateValue(this.value);
    }

  }
};

// @change="handleChange" 事件
// @change="handleChange" === @change="handleChange($event)"
// 注意这种区别!!
//
//
