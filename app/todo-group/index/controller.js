import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyCategory(title) {
      title.destroyRecord();
    }
  }
});
