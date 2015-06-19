import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    addAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        date: this.get('date'),
        answer_body: this.get('answer_body'),
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.setProperties({
        date: " ",
        answer_body: " "
      });
      id = this.get('controllers.question.model.id')
      this.transitionToRoute('/' + id)
    }
  }
});
