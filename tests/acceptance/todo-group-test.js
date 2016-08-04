import { test } from 'qunit';
import moduleForAcceptance from 'todo-group/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group');

test('visiting /todo-group', function(assert) {
  visit('/todo-groups');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups');
  });
});

test('visting /todo-groups shows a list of tasks', function(assert){
  server.createList('todo-group', 10);
  visit('todo-groups');

  andThen(function() {
    findWithAssert('.todo-list');
    assert.equal(findWithAssert('.todo-list__item').length, 10);
  });

});

test('user can navigate from main list to new todo list', function(assert) {
  visit('/todo-groups');
  click('.new-link');

  andThen(function() {
    assert.equal(currentURL(), '/todo-groups/new');
    assert.equal(findWithAssert('.page-title').text().trim(), 'Create a New Todo List!');
  });
});
