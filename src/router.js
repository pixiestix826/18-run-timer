import RunListCollection from './collections/run-list';
import RunIndexView from './views/posts-index';

var Router = Backbone.Router.extend({
  routes: {
    '': 'listAllRuns',
    new: 'newRun',
    ':id': 'runDetail',
    ':id/edit': 'editRun',
  },

  posts: null,

  initialize() {
    this.posts = new RunListCollection();
    this.posts.fetch();
  },

  listAllRuns() {
    // Create an instance of RunIndexView
    var runIndex = new RunIndexView({collection: this.posts});

    $('#outlet').html(runIndex.$el);
  },

});

export default Router;
