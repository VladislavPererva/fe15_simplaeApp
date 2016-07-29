function tasksService(){
	var tasks = {};

	tasks.list = [];

	tasks.addTask = function(task){
		tasks.list.push({text: task.text, done: false})
	}

	return tasks;
}

angular
.module('simpleApp')
.factory('tasksService', tasksService)