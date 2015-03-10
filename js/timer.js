var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
  age: 27,

  name: 'My App',
  timer: 0,

  actions: {
    older: function() {
      this.incrementProperty('age');
    },
    younger: function() {
      this.decrementProperty('age');
    },
    start_timer: function () {
      this.interval = setInterval(function() {
        var timer = this.get('timer');
        // you can reach into nested objects with get and set
        this.set('timer', timer + 1);
      }.bind(this), 1000);
    },
    stop_timer: function(){
      clearInterval(this.interval);
    }
  },

  people: [
    "John Smith",
    "Kathy Johnson",
    "Chelsea Jolley"
  ]
});

// Route
App.ApplicationRoute = Ember.Route.extend({

});