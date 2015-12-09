import RunPost from './models/run-post';
import RunListCollection from './collections/run-list';
import RunIndexView from './views/posts-index';
import RunFormView from './views/run-form';
import RunDetailView from './views/run-detail';

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
    this.posts.off('sync');
  },

  initialize() {
    this.posts = new RunListCollection();
    this.posts.fetch();
  },

  listAllRuns() {
    // Create an instance of RunIndexView
    var runIndex = new RunIndexView({collection: this.posts});

    $('#outlet').html(runIndex.el);
  },

  newRun() {
    // this.cleanUpListners();

    // Create an empty item model
    var run = new RunPost();

    // Show form to user
    var form = new RunFormView({model: run, collection: this.posts});

    $('#outlet').html(form.el);
  },

  runDetails(id) {
    var showEditForm = () => {
      // Get a run by its id from the collection
      this.run.get(id);

      // Only create view if run is found
      if (run) {
        // Create detailView
        var detailView = new RunDetailView({model: run, collection: this.runs});

        // Put detailView into outlet
        $('#outlet').html(detailView.el);
      }
    };

    // Try to show edit form immediately
    showEditForm();

    // Try to show edit form on collection sync
    this.contacts.on('sync', showEditForm);
  },
});

export default Router;
