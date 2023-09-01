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
		clearTodo(index) {
			this.todoList.splice(index, 1);
		},

		addNewTask() {
			const newTodoCopy = {
				...this.newTask,
				// text: this.addNewTaskCopy.text,
				// done: this.addNewTaskCopy.done,
			};
			this.todoList.unshift(newTodoCopy);
		},
	},
}).mount("#app");
