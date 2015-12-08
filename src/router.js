import RunModel from './models/run';
import RunListCollection from './collections/run-list';
import RunIndexView from './views/posts-index';
import RunFormView from './views/run-form';

var Router = Backbone.Router.extend({
  routes: {
    '': 'listAllRuns',
    new: 'newRun',
    ':id': 'runDetail',
    ':id/edit': 'editRun',
  },

  posts: null,

  cleanUpListners() {
    // Stops run details from showing up again
    this.collection.off('sync');
  },

  initialize() {
    this.posts = new RunListCollection();
    this.posts.fetch();
  },

  listAllRuns() {
    // Create an instance of RunIndexView
    var runIndex = new RunIndexView({collection: this.collection});

    $('#outlet').html(runIndex.el);
  },

  newRunForm() {
    this.cleanUpListners();

    // Create an empty item model
    var run = new RunModel();

    // Show form to user
    var form = new RunForm({model: run, collection: this.collection});

    $('#outlet').html(form.el);
  },

});

export default Router;
