const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "To do list",
			todoList: [
				{
					text: "fare la spesa",
					done: false,
				},
				{
					text: "cucinare",
					done: false,
				},
				{
					text: "fare l'esercizio",
					done: false,
				},
				{
					text: "allenarsi",
					done: false,
				},
			],
			newTask: {
				text: "",
				done: false,
			},
		};
	},
	methods: {
		addNewTask() {
			this.todoList.push(this.newTask);
		},
	},
}).mount("#app");
