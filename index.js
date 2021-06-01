/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue JS!",
      name: "Shinan",
      showInfo: false,
      colors: ["rainbow", "maroon", "yellow"],
      newColor: "",
      todos: [],
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
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
  },
});
