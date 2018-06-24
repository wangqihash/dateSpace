var vModelUnderstand = {
  props: ["parentToChild"],
  template: `<div>
              <p>对v-model语法糖的理解：</p>
              <input :value="parentToChild" @input="$emit('input', $event.target.value)" />
            </div>`,
};

var app = new Vue({
  el: "#app",
  data: {
    sth: "0"
  },
  components: {
    'v-model-understand': vModelUnderstand,
  },


});
