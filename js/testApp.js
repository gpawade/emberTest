window.App = Em.Application.create({
  VERSION: '0.0.1',

  LOG_TRANSITIONS: true,
    
  rootElement: '#testApp',

  ready: function() {
    	console.log('test app ready');
  }
});

App.Router.map(function(){
	
	this.route("about");
});

App.Todo = Em.Object.extend({
	title : '',
	done : false
});

App.IndexRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  controllerName : 'todo',
  setupController: function(controller, model) {
  		controller.set('newtodo', '');
  		controller.set('todos',[]);
  },
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return ;
  } 
});


App.TodoController = Em.ArrayController.extend({
  	
	actions:{
		add:function(newtodo){
			//console.log(this.get('newtodo'));
			var todos = this.get('todos');
			todos.push(App.Todo.create({
          title : newtodo
      }));
      this.set("newtodo","");

		}
	}

});


