/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue JS!",
      name: "Shinan",
      showInfo: false,
      colors: ["rainbow", "maroon", "yellow"],
      newColor: "",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Neat......";
    },
    addNewColor: function () {
      this.colors.push(this.newColor);
      this.newColor = "";
    },
  },
});
