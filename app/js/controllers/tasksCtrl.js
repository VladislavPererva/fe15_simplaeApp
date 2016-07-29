function tasksCtrl(tasksService){
	var vm = this;
	vm.tasksList = tasksService.list;
	vm.addTask = function(){
		tasksService.addTask(vm.newTask);
		vm.newTask = '';
	}
}

angular
.module('simpleApp')
.controller('tasksCtrl', tasksCtrl)