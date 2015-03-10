var App = Ember.Application.create();


// Action when clicked
App.ApplicationController = Ember.Controller.extend({
  age: 36,
  actions: {
    older: function(){
      this.incrementProperty('age');
    },
    younger: function(){
      this.decrementProperty('age');
    }
  }
});

// Timer
App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {
      name: 'My App',
      timer: 0
    };
  },
  activate: function () {
    this.interval = setInterval(function() {
      var timer = this.get('controller.model.timer');
      // you can reach into nested objects with get and set
      this.set('controller.model.timer', timer + 1);
    }.bind(this), 1000);
  },
  deactivate: function(){
    clearInterval(this.interval);
    _gaq.push(['trackEvent', 'timeOnPage', this.get('controller.model.timer')]);
  }
});