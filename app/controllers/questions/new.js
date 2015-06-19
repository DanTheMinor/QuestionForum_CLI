import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addQuestion: function() {
      var newQuestion = this.store.createRecord('tourney', {
        author: this.get('author'),
        description: this.get('description'),
        body: this.get('body')
      });
      newQuestion.save();
      this.setProperties({
        author: " ",
        desription: " ",
        body: " ",
      });

    }
  }
});
