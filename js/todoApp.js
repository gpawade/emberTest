var App = Em.Application.create({
	LOG_TRANSITIONS :true
});

App.Router.map(function(){

});

/*App.Router.reopen({
  rootURL: '/blog/'
});*/

App.Todo = Em.Object.extend({
	title : '',
	done : false
});

App.IndexController = Em.ObjectController.extend({
	newtodo : '',
	init:function(){
		var todos = this.get("todos");
		console.log('index controller init');
		//todos.pushObject(App.Todo.create({
		//	title:'one'
		//}));
	},
	actions:{
		add : function(newtodo){
			
			console.log(this.get("model"));
			var todos = this.get("todos");
						
			todos.pushObject(App.Todo.create( {
				title : newtodo
			}));
			
			this.set("newtodo","");
		},
		save:function(){
			//Save todos in local storage
		},
	}
});

App.IndexRoute = Em.Route.extend({
	model : function(){
		console.log('route model call')
		return {			
			todos : []
		};
	},
	actions:{
		add1 : function(newtodo){
			
			var todos = this.modelFor('index').todos;
			
			
			todos.pushObject(App.Todo.create( {
				title : newtodo
			}));
			
			var m = this.modelFor('index');
			console.log(m.todos.length);
			
		}
	}
});