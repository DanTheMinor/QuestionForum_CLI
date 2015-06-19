import Ember from 'ember';

export default Ember.Controller.extend({
  isEditingQuestion: false,
  actions: {
    delete: function() {
      //if (confirm('Are you sure you want to delete this question?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      //}
    },
    edit: function() {
      this.set('isEditingQuestion', true);
    },
    save: function() {
      // var x = this.get('model.answers');
      // var y = []
      // function pushToY(elemenet, index, array) {
      //   y.push(element);
      // }
      // x.forEach(pushToY);
      // debugger;
      this.set('isEditingQuestion', false);
      this.get('model').save();
    }
  }
});
