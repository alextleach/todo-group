import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy(todoItem) {
      todoItem.destroyRecord();
    },

  toggleCheck(todoItem) {
    todoItem.toggleProperty('done');
    todoItem.save();
  },

    createTodoItem(todoGroup, formValues, reset){
      const storeItem = this.store.createRecord('todo-item', formValues);
      storeItem.set('group', todoGroup);
      storeItem.save();
      reset();
    },
  }
});
