window.App = Em.Application.create({
  VERSION: '0.0.1',

  LOG_TRANSITIONS: true,
    
  //rootElement: '#body',

  ready: function() {
    
  }
});


App.ApplicationController = Em.ObjectController.extend({
  	persons :[
  		{name:'ganesh',address:'pune'},
  		{name:'harsh', address:'pune'}
  	],

  	blogs : ['bootstrap article', 'ember tutoria'],

  	actions:{

  		viewevent:function(t){
  			console.log('view event');
  			console.log(t);
  		}
  	}
});


App.BlogPostComponent = Em.Component.extend({
  tagName: 'div',
  classNames: ['blogpost'],
   didInsertElement: function() {
  		console.log('blog post component inserted')  
   }.on('didInsertElement')
});


App.ClickableArea = Em.View.extend({
	tagName:'div',
	click: function(evt){
       console.log('clickable area click');
       this.get('controller').send('viewevent', 11);
	}
});

//App.SayHelloView.create().appendTo('body');

