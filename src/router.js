
var Router = Backbone.Router.extend({
  routes: {
    '': 'listAllRuns',
    new: 'newRun',
    ':id': 'runDetail',
    ':id/edit': 'editRun',
  },
});

export default Router;
