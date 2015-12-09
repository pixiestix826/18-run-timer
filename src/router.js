import RunPost from './models/run-post';
import RunListCollection from './collections/run-list';
import RunIndexView from './views/posts-index';
import RunFormView from './views/run-form';
import RunDetailView from './views/run-detail';

// import RunEditView from './views/run-edit';

var Router = Backbone.Router.extend({
  routes: {
    '': 'listAllRuns',
    new: 'newRun',
    ':id': 'runDetails',
    ':id/edit': 'editRun',
  },

  allRuns: null,

  cleanUpListners() {
    // Stops run details from showing up again
    this.allRuns.off('sync');
  },

  initialize() {
    this.allRuns = new RunListCollection();
    this.allRuns.fetch();
  },

  listAllRuns() {
    // Create an instance of RunIndexView
    var runIndex = new RunIndexView({collection: this.allRuns});

    $('#outlet').html(runIndex.el);
  },

  newRun() {
    // this.cleanUpListners();

    // Create an empty item model
    var run = new RunPost();

    // Show form to user
    var form = new RunFormView({model: run, collection: this.allRuns});

    $('#outlet').html(form.el);
  },

  runDetails(id) {
    var showEditForm = () => {
      // Get a run by its id from the collection
      var run = this.allRuns.get(id);

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
    this.allRuns.on('sync', showEditForm);
  },

  editRun(id) {
    var showEditForm = () => {
      // Get a run by its id from the collection
      var run = this.allRuns.get(id);

      // Only create view if run is found
      if (run) {
        // Create detailView
        var detailView = new RunFormView({model: run, collection: this.runs});

        // Put detailView into outlet
        $('#outlet').html(detailView.el);
      }
    };

    // Try to show edit form immediately
    showEditForm();

    // Try to show edit form on collection sync
    this.allRuns.on('sync', showEditForm);
  },
});

export default Router;
